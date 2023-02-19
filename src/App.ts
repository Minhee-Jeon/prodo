import { Component } from './core/core';
import UnFoldLeftNav from './components/leftNav/UnFoldLeftNav';
import TopNav from './components/topNav/TopNav';
import FoldLeftNav from './components/leftNav/FoldLeftNav';

export default class App extends Component {
  render() {
    const unFoldLeftNavbar = new UnFoldLeftNav().el;
    const foldLeftNavbar = new FoldLeftNav().el;
    const topNavbar = new TopNav().el;
    const routerView = document.createElement('router-view');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('contents');
    contentDiv.append(
      topNavbar,
      routerView);

    this.el.append(
      unFoldLeftNavbar,
      foldLeftNavbar,
      contentDiv
    );
  }
}