import { Component } from '../../core/core';
import TopOperationPart from './TopOperationPart';
import TopTimePart from './TopTimePart';
import WeekIndicator from './WeekIndicator';

export default class TopNav extends Component {
  constructor() {
    // const props = {
    //   id: 'topNav'
    // };
    super({
      tagName: 'header',
      // props: props
    });
  }
  render() {
    const topTimePart = new TopTimePart().el;
    const topOperationPart = new TopOperationPart().el;
    this.el.append(
      topTimePart,
      topOperationPart
    );
  }
}