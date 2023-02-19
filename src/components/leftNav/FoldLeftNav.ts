import { Component } from '../../core/core';
import Icon from '../common/Icon';
import IconButton from '../common/IconButton';
// rect sparkling cube friend settings
export default class FoldLeftNav extends Component {
  render() {
    const hamburgerMenuButton = new IconButton({ iconEl: new Icon({ iconName: 'hamburgerMenu', width: '33.75px', height: '29px' }).el.outerHTML }).el;
    const rectButton = new IconButton({ iconEl: new Icon({ iconName: 'rect' }).el.outerHTML }).el;
    const sparklingButton = new IconButton({ iconEl: new Icon({ iconName: 'sparkling' }).el.outerHTML }).el;
    const cubeButton = new IconButton({ iconEl: new Icon({ iconName: 'cube' }).el.outerHTML }).el;
    const friendButton = new IconButton({ iconEl: new Icon({ iconName: 'friend' }).el.outerHTML }).el;
    const settingsButton = new IconButton({ iconEl: new Icon({ iconName: 'settings', width: '30px', height: '31px' }).el.outerHTML }).el;
    const miniIconWrapper = document.createElement('div');

    miniIconWrapper.classList.add('mini-icon-wrapper');
    miniIconWrapper.append(
      rectButton,
      sparklingButton,
      cubeButton,
      friendButton
    );

    this.el.classList.add('left-nav-fold');
    this.el.append(
      hamburgerMenuButton,
      miniIconWrapper,
      settingsButton
    );

    this._bindEvent(hamburgerMenuButton);
  }

  private _bindEvent(el: HTMLElement) {
    el.addEventListener('click', () => {
      const unFoldleftNav = document.getElementsByClassName('left-nav-unfold')[0];
      unFoldleftNav.removeAttribute('style');
      this.el.setAttribute('style', 'display:none');
    })
  }
}