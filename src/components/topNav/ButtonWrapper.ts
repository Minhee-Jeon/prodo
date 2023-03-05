import { BTN_COLOR } from '../../const/consts';
import { Component } from '../../core/core';
import Button from '../common/Button';
import Auth from './Auth';

export default class ButtonWrapper extends Component {
  render() {
    const loginButton = new Button({
      message: '로그인',
      width: '96px',
      height: '49px',
      color: BTN_COLOR.LIGHT_GRAY
    }).el as HTMLButtonElement;
    
    const signUpButton = new Button({
      message: '회원가입',
      width: '96px',
      height: '49px',
      color: BTN_COLOR.LIGHT_GRAY
    }).el as HTMLButtonElement;

    const auth = new Auth();

    loginButton.classList.add('top-operation-btn');
    loginButton.classList.add('login-btn');
    auth.bindLoginModal(loginButton);

    signUpButton.classList.add('top-operation-btn');
    signUpButton.classList.add('signup-btn');
    auth.bindSignUpModal(signUpButton);

    this.el.append(
      loginButton,
      signUpButton
    );
    this.el.classList.add('button-wrapper');
  }
}