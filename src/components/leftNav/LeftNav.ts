import { Component } from '../../core/core';
import ButtonWrapper from './ButtonWrapper';
import SearchMenu from './SearchMenu';
import MiniCalendar from './MiniCalendar';
import MenuList from './MenuList';

export default class LeftNav extends Component {
  render() {
    const searchMenu = new SearchMenu().el;
    const miniCalendar = new MiniCalendar().el;
    const buttonWrapper = new ButtonWrapper().el;
    const menuList = new MenuList().el;

    this.el.classList.add('left-nav');
    this.el.append(
      searchMenu,
      miniCalendar,
      buttonWrapper,
      menuList
    );
  };
};