import { Component } from '../../core/core';

export default class WeekDayRange extends Component {
  // TODO: curDate 상태로 변경
  render() {
    const curDate: Date = new Date();
    this.el.classList.add('week-day-range');
    this.el.innerHTML = /* html */`
      <p>${getDaysOfWeek(curDate)}</p>
    `
  }
}

export function getDaysOfWeek(curDate: Date): string {
  return `${getFirstDayOfWeek(curDate)} ~ ${getLastDayOfWeek(curDate)}`;
}
function getLastDayOfMonth(year = 2023, month = 1): number {
  return new Date(year, month, 0).getDate();
}
function handleZero(month: number): number {
  return month == 0 ? 12 : month;
}

function getFirstDayOfWeek(curDate: Date): string {
  const currDate = curDate.getDate();
  const dayIndex = curDate.getDay();
  const minus = dayIndex > 0 ? dayIndex - 1 : 0;
  const firstDay = currDate > minus
    ? currDate - minus
    : getLastDayOfMonth(curDate.getFullYear(), curDate.getMonth()) - (minus - currDate);
  const firstMonth = currDate > minus
    ? curDate.getMonth() + 1
    : new Date(curDate.getFullYear(), curDate.getMonth()).getMonth();
  return `${('0' + handleZero(firstMonth)).slice(-2)}.${('0' + firstDay).slice(-2)}`;
}

function getLastDayOfWeek(curDate: Date): string {
  const currDate = curDate.getDate();
  const dayIndex = curDate.getDay();
  const plus = dayIndex > 0 ? 7 - dayIndex : 0;
  const lastDay = currDate + plus < getLastDayOfMonth(curDate.getFullYear(), curDate.getMonth())
    ? currDate + plus
    : currDate + plus - getLastDayOfMonth(curDate.getFullYear(), curDate.getMonth());
  const lastMonth = currDate + plus < getLastDayOfMonth(curDate.getFullYear(), curDate.getMonth() + 1)
    ? curDate.getMonth() + 1
    : new Date(curDate.getFullYear(), curDate.getMonth()).getMonth() + 2; // 1
  return `${('0' + lastMonth).slice(-2)}.${('0' + lastDay).slice(-2)}`;
}