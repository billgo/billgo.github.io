export default function getTags(moduleData) {
  const tags = {};
  Object.keys(moduleData).forEach((filename) => {
    const module = moduleData[filename];
    const moduleTags = module.meta.tags;
    if (moduleTags) {
      moduleTags.forEach((tag) => {
        if (tags[tag]) {
          tags[tag].push(module);
        } else {
          tags[tag] = [module];
        }
      });
    }
  });
  return tags;
}