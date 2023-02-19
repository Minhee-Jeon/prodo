import { Component } from '../../core/core';
import ButtonWrapper from './ButtonWrapper';
import SearchMenu from './SearchMenu';
import MiniCalendar from './MiniCalendar';
import MenuList from './MenuList';
import IconButton from '../common/IconButton';
import Icon from '../common/Icon';

export default class UnFoldLeftNav extends Component {
  render() {
    const searchMenu = new SearchMenu().el;
    const miniCalendar = new MiniCalendar().el;
    const buttonWrapper = new ButtonWrapper().el;
    const menuList = new MenuList().el;
    const settingsButton = new IconButton({ iconEl: new Icon({ iconName: 'settings', width: '30px', height: '31px' }).el.outerHTML }).el;

    this.el.classList.add('left-nav-unfold');
    this.el.append(
      searchMenu,
      miniCalendar,
      buttonWrapper,
      menuList,
      settingsButton
    );
  }
}