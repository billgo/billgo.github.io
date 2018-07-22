import React from 'react';
import Document from 'teasim-document';
import Analyzation from 'teasim-analyzation';
import FontFaceObserver from 'fontfaceobserver';
import Layout from 'app/components/Layout';
import "app/assets/index";

if (typeof window !== 'undefined') {
  require('app/styles/index.less');
}

const fontMono = new FontFaceObserver('IBM Plex Mono', {});
const fontSans = new FontFaceObserver('IBM Plex Sans', {});
const fontSansCondensed = new FontFaceObserver('IBM Plex Sans Condensed', {});
const fontSerif = new FontFaceObserver('IBM Plex Serif', {});

Promise.all([fontMono.load(), fontSans.load(), fontSansCondensed.load(), fontSerif.load()]).then(function () {
  document.body.classList.add('fonts-loaded');
}, () => {
  document.body.classList.remove('fonts-loaded');
});

Analyzation.initialize('UA-78256548-1');
Analyzation.pageview(window.location.pathname + window.location.search);

export default (props) => {
  const { 
    title,
    children, 
    ...rests 
  } = props;

  return (
    <Document title={title}>
      <Layout {...rests}>
        {children}
      </Layout>
    </Document>
  );
}