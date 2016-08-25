import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

import { Hero } from './hero/hero';
import { HeroListComponent } from './hero/hero-list.component';

ReactDOM.render(
  <Router history={browserHistory}>
  
  </Router>,
  document.getElementById("example")
);