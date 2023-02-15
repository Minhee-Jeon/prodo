import { Component } from '../../core/core';
import Icon from '../common/Icon';
import IconButton from '../common/IconButton';
import Search from './Search';

export default class SearchMenu extends Component {
  render() {
    const icon = new Icon({ iconName: 'hamburgerMenu', size: { width: '33.75px', height: '29px' } }).el;
    const iconButton = new IconButton({ iconEl: icon }).el;
    const search = new Search().el;

    this.el.classList.add('left-menu');
    this.el.append(
      iconButton,
      search
    );
  }
}