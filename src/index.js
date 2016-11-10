import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Router, Route, IndexRoute, hashHistory} from 'react-router';
// import Home from './Home';
// import App from './App';
// import Comments from './Comments'
// import './index.css';
//
// ReactDOM.render(
//   <Router history={hashHistory} >
//     <Route path='/' component={Home} >
//       <IndexRoute component={App} />
//       <Route path='comments' component={Comments} />
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );
