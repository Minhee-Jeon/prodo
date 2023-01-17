import { Component } from '../../core/core';
import Menu from './Menu';

export default class LeftNav extends Component {
  render() {
    const menu = new Menu().el;
    this.el.classList.add('left-nav');
    this.el.append(menu);
  };
}