import { Component } from '../../core/core';
import TopTimePart from './TopTimePart';
import WeekIndicator from './WeekIndicator';

export default class TopNav extends Component {
  constructor() {
    super({
      tagName: 'header'
    });
  }
  render() {
    const topTimePart = new TopTimePart().el;
    this.el.append(
      topTimePart
    );
  }
}