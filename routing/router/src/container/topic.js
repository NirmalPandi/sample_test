import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (<div>
       { console.log(`${match.url}`)}
        <h3>Please select a topic.</h3>
        </div>
      )}/>
    </div>
  )
  
  const Topic = ({ match }) => (
    <div>
  
      <h3>{match.params.topicId}</h3>
      { console.log(`${match.params.topicId}`)}
    </div>
  )



  function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Topic);