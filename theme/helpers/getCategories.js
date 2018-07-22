export default function getCategories(moduleData,) {
  const menuMeta = moduleData.map(item => item.meta);
  const menuItems = {};
  menuMeta.sort((a, b) => (a.order || 0) - (b.order || 0)).forEach((meta) => {
    const category = meta.category || 'defaults';
    if (!menuItems[category]) {
      menuItems[category] = [];
    }
    menuItems[category].push(meta);
  });
  return menuItems;
}