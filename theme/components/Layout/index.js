import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@teakit/statics/router';
import { StyleSheet, Layout, Grid, Navbar, Button } from "teasim";
import { IconArrow } from 'teasim-icon';
import Anchor from "app/components/Anchor";

const styles = StyleSheet.create({
  'default': {
    bodyer: {
      minHeight: '100vh',
    },
  },
});

const StandardLayout = props => (
  <Layout>
    <Layout.Header>
      <div className="screen-md py-none">
        <Navbar>
          <Navbar.Board className="text-uppercase py-small">
            <Anchor href="/" className="py-huge">
              {props.themeConfig.sitename}
            </Anchor>
          </Navbar.Board>
          <Navbar.Board className="text-right" style={ styles.resume }>
            <Button 
              href="/resume.pdf" 
              target="_blank"
              size="tiny" 
              className="ba-none px-none">
              RESUME <IconArrow name="down" className="ml-tiny" />
            </Button>
          </Navbar.Board>
        </Navbar>
      </div>
    </Layout.Header>
    <Layout.Bodyer style={ styles.bodyer }>
      {props.children}
    </Layout.Bodyer>
    <Layout.Footer>
      <div className="screen-md">
        <Grid>
          <Grid.Column className="text-center">
            <div className="font-tiny">
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
)

export default StandardLayout;