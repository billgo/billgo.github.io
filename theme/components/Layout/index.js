import React from 'react';
import PropTypes from 'prop-types';
import createStyles from 'teasim-stylers';
import { Link } from 'teasim-statics/router';
import { Layout, Grid, Navbar, Button } from "yiqilaiui";
import ArrowDown from 'teasim-icon/lib/ArrowDown';
import Anchor from "app/components/Anchor";

const styles = createStyles({
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
              href="/Resume.pdf" 
              target="_blank"
              size="tiny" 
              className="ba-none px-none">
              RESUME <ArrowDown className="ml-tiny" />
            </Button>
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
)

export default StandardLayout;