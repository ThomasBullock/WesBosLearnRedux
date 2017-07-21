import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends Component {
  render() {
    // https://github.com/ReactTraining/react-router/issues/4105#issuecomment-289195202
    const renderMergedProps = (component, ...rest) => {
      const finalProps = Object.assign({}, ...rest);
      return (
        React.createElement(component, finalProps)
      );
    }
    
    const PropsRoute = ({ component, ...rest }) => {
      return (
        <Route {...rest} render={routeProps => {
          return renderMergedProps(component, routeProps, rest);
        }}/>
      );
    }

    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/*React.cloneElement(this.props.children, this.props)*/}
        <Switch>
          <PropsRoute path='/view/:postId' component={Single} {...this.props} />
          <PropsRoute component={PhotoGrid} {...this.props} />
        </Switch>
      </div>
    );
  }
}

export default Main;