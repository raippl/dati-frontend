import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from '../admin/components/Sidebar/';
import Breadcrumb from '../admin/components/Breadcrumb/';
import Footer from '../admin/components/Footer/';
import Aside from '../admin/components/Aside/';
import Dashboard from '../admin/views/Dashboard/'
import IngestionForm from '../admin/views/IngestionForm/'
import Ontologies from '../admin/views/Ontologies/'
import IngestionWizard from '../admin/views/IngestionWizard/';
import HeaderAuth  from '../components/HeaderFooter/HeaderAuth';
import UserStoryContainer from './UserStoryContainer.js'

const mapStateToProps = state => ({
  appName: state.appName
});


class Full extends React.Component {
  render() {
    return (
      <div data-reactroot className="app">
        <HeaderAuth />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <Switch>
                <Route path="/admin/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/admin/ingestionform" name="Forms" component={IngestionForm} />
                <Route path="/admin/ingestionwizzard" name="Forms" component={IngestionWizard} />
                <Route path="/admin/dash" name="Dash" component={UserStoryContainer} />
                <Route path="/admin/ontologies" name="Ontologies" component={Ontologies} />
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
            </div>
          </main>
         
        </div>
         <Footer />
      </div>
    );
  }
}


export default connect(mapStateToProps, () => ({}))(Full);
