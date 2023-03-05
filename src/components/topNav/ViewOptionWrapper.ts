import { Component } from '../../core/core';

export default class ViewOptionWrapper extends Component {
  render() {
    // TODO: 월/주/일 선택 여부를 상태로 작업 + 선택된 옵션 표시
    this.el.classList.add('viewopt-wrapper');
    this.el.innerHTML = /* html */`
      <p class='opt-month'>월</p>
      <p class='opt-week'>주</p>
      <p class='opt-day'>일</p>
      `
    ;
  }
}