import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Bridge } from './components/Bridge';
import { Farming } from './components/Farming';
import { MoonControl } from './components/MoonControl';
import { Moontron } from './components/Moontron';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/bridge' component={Bridge} />
        <Route path='/farming' component={Farming} />
        <Route path='/mooncontrol' component={MoonControl} />
        <Route path='/moontron' component={Moontron} />
      </Layout>
    );
  }
}
