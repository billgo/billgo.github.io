import React from 'react';
import PropTypes from 'prop-types';
import Analyzation from 'teasim-analyzation';
import FontFaceObserver from 'fontfaceobserver';
import { Link } from 'teasim-statics/router';
import { StyleSheet, Document, Layout, Grid, Navbar } from "teasim";
import Anchor from "app/components/Anchor";

if (typeof window !== 'undefined') {
  require('app/styles/index.less');
}

const fontSans = new FontFaceObserver('Alegreya Sans', {});
const fontSerif = new FontFaceObserver('Alegreya', {});

Promise.all([fontSans.load(), fontSerif.load()]).then(function () {
  document.body.classList.add('fonts-loaded');
}, () => {
  document.body.classList.remove('fonts-loaded');
});

Analyzation.initialize('UA-78256548-1');
Analyzation.pageview(window.location.pathname + window.location.search);

const styles = StyleSheet.create({
  'default': {
    bodyer: {
      minHeight: '100vh',
    },
  },
});

const PersonalLayout = props => (
  <Layout>
    <Layout.Header>
      <div className="screen-md py-none">
        <Navbar>
          <Navbar.Board className="text-uppercase py-small">
            <Anchor href="/" className="py-huge">
              {props.themeConfig.sitename}
            </Anchor>
            <span className="px-mini">/</span>
            <span>{props.name}</span>
          </Navbar.Board>
        </Navbar>
      </div>
    </Layout.Header>
    <Layout.Bodyer style={ styles.bodyer }>
      {props.children}
    </Layout.Bodyer>
    <Layout.Footer>
      <div className="screen-md py-none">
        <Grid>
          <Grid.Column className="text-center py-huge">
            <div className="font-tiny mb-medium">
              {props.themeConfig.slogan} LIVING IN SINGAPORE
            </div>
            <div className="font-tiny">
              © {props.themeConfig.footer}
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </Layout.Footer>
  </Layout>
);

export default (props) => {
  const { 
    title,
    children, 
    ...rests 
  } = props;

  return (
    <Document title={title}>
      <PersonalLayout {...rests}>
        {children}
      </PersonalLayout>
    </Document>
  );
}