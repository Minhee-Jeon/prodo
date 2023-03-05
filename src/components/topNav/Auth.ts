import { Component } from '../../core/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import '../../style/auth.scss';
import FireBase from './FireBase';

const SIGN_IN_MODAL_ID = 'loginModal';
const SIGN_UP_MODAL_ID = 'signUpModal';

export default class Auth extends Component {
  private fbApp = FireBase.app;

  // 참고 : https://firebase.google.com/docs/auth/web/password-auth?hl=ko&authuser=0
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

  private exitBtn() : HTMLDivElement {
    const exitBtn = document.createElement('div');
    

    return exitBtn;
  }

  // todo... modal 공통 모듈 만들면 아래 modal들 공통모듈 사용하도록 수정요
  private loginModal() : HTMLDivElement {
    const loginModalEl: HTMLDivElement = document.createElement('div');
    loginModalEl.id = SIGN_IN_MODAL_ID;
    loginModalEl.setAttribute("class", "modal hide");

    const idEl: HTMLInputElement = document.createElement('input');
    idEl.id = 'login_id';
    
    const pwEl: HTMLInputElement = document.createElement('input');
    pwEl.id = 'login_pw';
    
    const loginBtn: HTMLButtonElement = document.createElement('button');
    loginBtn.id = 'login_btn';
    loginBtn.textContent = '로그인'
    
    const findPwEl: HTMLButtonElement = document.createElement('button');
    findPwEl.id = 'findPw_btn';
    findPwEl.textContent = '비밀번호 찾기'

    loginBtn.addEventListener("click", () => {
      this.requestlogin(idEl.value, pwEl.value);
    });
    
    loginModalEl.append(idEl);
    loginModalEl.append(pwEl);
    loginModalEl.append(loginBtn);
    loginModalEl.append(findPwEl);
    return loginModalEl;
  }

  private signUpModal() : HTMLDivElement{
    const signUpModalEl: HTMLDivElement = document.createElement('div');
    signUpModalEl.id = SIGN_UP_MODAL_ID;
    signUpModalEl.setAttribute("class", "modal hide");

    const idEl: HTMLInputElement = document.createElement('input');
    idEl.id = 'login_id';
    
    const pwEl: HTMLInputElement = document.createElement('input');
    pwEl.id = 'login_pw';
    
    const signUpBtn: HTMLButtonElement = document.createElement('button');
    signUpBtn.id = 'signUp_btn';
    signUpBtn.textContent = '회원가입'
    signUpBtn.addEventListener("click", () => {
      this.requestSignUp(idEl.value, pwEl.value);
    });
    
    signUpModalEl.append(idEl);
    signUpModalEl.append(pwEl);
    signUpModalEl.append(signUpBtn);
    return signUpModalEl;
  }

  private signOutModal() : HTMLDivElement{
    const signOutModalEl: HTMLDivElement = document.createElement('div');

    return signOutModalEl;
  }
  private hideModals() {
    const modals =  document.getElementsByClassName('modal');
    for(let i = 0; i < modals.length; ++i) {
      modals.item(i)?.classList.add('hide');
    }
  }
  public bindLoginModal(loginBtn:HTMLButtonElement) {
    loginBtn.addEventListener("click", () => {
      this.hideModals();
      this.showModal(SIGN_IN_MODAL_ID);
    });
  }
  public bindSignUpModal(signUpBtn:HTMLButtonElement) {
    signUpBtn.addEventListener("click", () => {
      this.hideModals();
      this.showModal(SIGN_UP_MODAL_ID);
    });
  }
  render() {
    const contentDiv = document.getElementById('root');
    console.log(this.el);
    this.el.parentElement?.parentElement;
    contentDiv?.appendChild(this.loginModal());
    contentDiv?.appendChild(this.signUpModal());
    contentDiv?.appendChild(this.signOutModal());

    contentDiv?.addEventListener("mouseup", e => {
      const eventTarget = e.target as HTMLElement;
      if(!eventTarget.closest('.modal')) {
        this.hideModals();
      }
    });
  }
}