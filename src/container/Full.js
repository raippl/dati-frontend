import React from 'react';
import { connect } from 'react-redux';
import Dataset from './Dataset';
import { Link, Switch, Route, Redirect } from 'react-router-dom'

import Header from '../admin/components/Header/';
import Sidebar from '../admin/components/Sidebar/';
import Breadcrumb from '../admin/components/Breadcrumb/';
import Aside from '../admin/components/Aside/';
import Footer from '../admin/components/Footer/';

import Dashboard from '../admin/views/Dashboard/'
import Forms from '../admin/views/Carica/Forms/'

const mapStateToProps = state => ({
  appName: state.appName
});

/*class Full extends React.Component {
  render() {
    return (
      <div>
         <h2>Full</h2>
      </div>
    );
  }
} */




class Full extends React.Component {
  render() {
    return (
      <body className="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <Switch>
                <Route path="/admin/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/admin/carica/forms" name="Forms" component={Forms}/>
                <Redirect from="/admin" to="/admin/dashboard"/>
              </Switch>
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
      </body>
    );
  }
}


export default connect(mapStateToProps, () => ({}))(Full);