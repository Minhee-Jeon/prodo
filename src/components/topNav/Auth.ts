import { Component } from '../../core/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import '../../style/auth.scss';
import FireBase from './FireBase';

const SIGN_IN_MODAL_ID = 'loginModal';
const SIGN_UP_MODAL_ID = 'signUpModal';

export default class Auth extends Component {
  private fbApp = FireBase.app;

  private requestSignUp(email:string, password:string) {
    const auth = getAuth(this.fbApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  private requestlogin(email:string, password:string) {
    const auth = getAuth(this.fbApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  private showModal(targetId: string) {
    const targetModal =  document.getElementById(targetId);
    targetModal?.classList.remove('hide');
  }

  private hideModal(targetId: string) {
    const targetModal =  document.getElementById(targetId);
    targetModal?.classList.add('hide');
  }

  private createExitBtn() : HTMLDivElement {
    const exitBtn = document.createElement('div');
    exitBtn.classList.add('auth_btn_exit');
    return exitBtn;
  }

  private createAccountDiv() : [HTMLDivElement, HTMLInputElement, HTMLInputElement] {
    const accountDiv: HTMLDivElement = document.createElement('div');
    accountDiv.classList.add('account_div')

    const idLabel: HTMLLabelElement = document.createElement('label');
    idLabel.classList.add('auth_label');
    const pwLabel: HTMLLabelElement = document.createElement('label');
    pwLabel.classList.add('auth_label');
    
    const labelIdSpan: HTMLSpanElement = document.createElement('span');
    labelIdSpan.classList.add('auth_label_span');
    labelIdSpan.textContent = '아이디';
    
    const labelPwSpan: HTMLSpanElement = document.createElement('span');
    labelPwSpan.classList.add('auth_label_span');
    labelPwSpan.textContent = '비밀번호';

    const idInput: HTMLInputElement = document.createElement('input');
    idInput.classList.add('auth_input');

    const pwInput: HTMLInputElement = document.createElement('input');
    pwInput.classList.add('auth_input');

    accountDiv.append(idLabel);
    idLabel.append(labelIdSpan);
    idLabel.append(idInput);
    accountDiv.append(pwLabel);
    pwLabel.append(labelPwSpan);
    pwLabel.append(pwInput);

    return [accountDiv, idInput, pwInput];
  }

  private createLoginModal() : HTMLDivElement {
    const loginModalEl: HTMLDivElement = document.createElement('div');
    loginModalEl.id = SIGN_IN_MODAL_ID;
    loginModalEl.setAttribute('class', 'modal hide');

    const exitBtn = this.createExitBtn();
    const [accountDiv, idEl, pwEl] = this.createAccountDiv();


    const btnsDiv: HTMLDivElement = document.createElement('div');
    btnsDiv.classList.add('btns_div');

    const loginBtn: HTMLButtonElement = document.createElement('button');
    loginBtn.textContent = '로그인';
    loginBtn.classList.add('auth_btn');

    const findPwEl: HTMLButtonElement = document.createElement('button');
    findPwEl.textContent = '비밀번호 찾기';
    findPwEl.classList.add('auth_btn_borderless');

    loginBtn.addEventListener("click", () => {
      this.requestlogin(idEl.value, pwEl.value);
    });

    loginModalEl.append(exitBtn);
    loginModalEl.append(accountDiv);
    loginModalEl.append(btnsDiv);
    btnsDiv.append(loginBtn);
    btnsDiv.append(findPwEl);
    return loginModalEl;
  }

  private createSignUpModal() : HTMLDivElement{
    const signUpModalEl: HTMLDivElement = document.createElement('div');
    signUpModalEl.id = SIGN_UP_MODAL_ID;
    signUpModalEl.setAttribute("class", "modal hide");

    const exitBtn = this.createExitBtn();
    const [accountDiv, idEl, pwEl] = this.createAccountDiv();

    const btnsDiv: HTMLDivElement = document.createElement('div');
    btnsDiv.classList.add('btns_div');

    const signUpBtn: HTMLButtonElement = document.createElement('button');
    signUpBtn.classList.add('auth_btn');
    signUpBtn.textContent = '가입하기'
    signUpBtn.addEventListener("click", () => {
      this.requestSignUp(idEl.value, pwEl.value);
    });
    
    signUpModalEl.append(exitBtn);
    signUpModalEl.append(accountDiv);
    signUpModalEl.append(btnsDiv);
    btnsDiv.append(signUpBtn);
    return signUpModalEl;
  }

  private createSignOutModal() : HTMLDivElement{
    const signOutModalEl: HTMLDivElement = document.createElement('div');

    return signOutModalEl;
  }
  static hideModals() {
    const modals =  document.getElementsByClassName('modal');
    for(let i = 0; i < modals.length; ++i) {
      modals.item(i)?.classList.add('hide');
    }
  }
  public bindLoginModal(loginBtn:HTMLButtonElement) {
    loginBtn.addEventListener("click", () => {
      Auth.hideModals();
      this.showModal(SIGN_IN_MODAL_ID);
    });
  }
  public bindSignUpModal(signUpBtn:HTMLButtonElement) {
    signUpBtn.addEventListener("click", () => {
      Auth.hideModals();
      this.showModal(SIGN_UP_MODAL_ID);
    });
  }
  render() {
    const loginModal = this.createLoginModal();
    const signUpModal = this.createSignUpModal();
    const signOutModal = this.createSignOutModal();
    document.addEventListener("DOMContentLoaded", function() { // calendar render는 마지막에 해야 css 적용됨
      const topNavDiv = document.getElementById('topNav');
      console.log(topNavDiv);
      topNavDiv?.appendChild(loginModal);
      topNavDiv?.appendChild(signUpModal);
      topNavDiv?.appendChild(signOutModal);

      document.addEventListener("mouseup", e => {
        const eventTarget = e.target as HTMLElement;
        if(!eventTarget.closest('.modal')) {
          Auth.hideModals();
        }
      });
    })
  }
}