import { Component } from '../../core/core';

export default class WeekIndicator extends Component {
  // TODO: curDate 상태로 변경
  render() {
    const curDate: Date = new Date();
    this.el.classList.add('week-indicator');
    this.el.innerHTML = /* html */`
      <p>${indicateWeek(curDate)}</p>
    `
  }
}

export function indicateWeek(curDate: Date): string {
  return `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월 ${month2Kor(getWeekOfMonth(curDate))}째주`;
}

function getWeekOfMonth(date: Date): number {
  const first = new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/01');
  return Math.ceil((date.getDate() + first.getDay()) / 7);
}

function month2Kor(month: number): string {
  const ret: string = month === 1 ? '첫' :
                      month === 2 ? '둘' :
                      month === 3 ? '셋' :
                      month === 4 ? '넷' : '다섯'
  return ret;
}