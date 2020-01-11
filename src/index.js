import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import Users from './users';
import Gallery from './gallery';
import Notfound from './notfound';
import ReadMore from './readmore';
import InfoList from './InfoList';
import InfoData from './cards.json';

const routing = (
  <Router>
    <div>
      <div className="nav">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/gallery">Gallery</NavLink>
          </li>
        
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={InfoList} />
        <Route path="/users/" component={Users} />
        <Route path="/gallery/" component={Gallery} />
        <Route path="/:postId" render={props => <ReadMore data={InfoData} {...props} />} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
