import { Component } from '../../core/core';
import Icon from '../common/Icon';
import IconButton from '../common/IconButton';
import Search from './Search';

export default class SearchMenu extends Component {
  render() {
    const hamburgerMenuButton = new IconButton({ iconEl: new Icon({ iconName: 'hamburgerMenu', width: '33.75px', height: '29px' }).el.outerHTML }).el;
    const search = new Search().el;

    this.el.classList.add('left-menu');
    this.el.append(
      hamburgerMenuButton,
      search
    );

    this._bindEvent(hamburgerMenuButton);
  }

  private _bindEvent(el: HTMLElement) {
    el.addEventListener('click', () => {
      const foldleftNav = document.getElementsByClassName('left-nav-fold')[0];
      const unFoldleftNav = document.getElementsByClassName('left-nav-unfold')[0];
      foldleftNav.setAttribute('style', 'display:flex');
      unFoldleftNav.setAttribute('style', 'display:none');
    })
  }
}