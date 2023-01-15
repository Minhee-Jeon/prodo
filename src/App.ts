import { Component } from './core/core';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';

export default class App extends Component {
  render() {
    const topNavbar = new TopNav().el;
    const leftNavbar = new LeftNav().el;
    const routerView = document.createElement('router-view');
    this.el.append(
      topNavbar,
      leftNavbar,
      routerView
    );
  }
}