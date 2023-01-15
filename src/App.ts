import { Component } from './core/core';
import LeftNav from './components/LeftNav';
import TopNav from './components/TopNav';

export default class App extends Component {
  render() {
    const leftNavbar = new LeftNav().el;
    const topNavbar = new TopNav().el;
    const routerView = document.createElement('router-view');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('contents');
    contentDiv.append(
      topNavbar, 
      routerView);

    this.el.append(
      leftNavbar,
      contentDiv
    );
  }
}