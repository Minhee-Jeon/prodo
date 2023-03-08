import { Component } from '../../core/core';
import ButtonWrapper from './ButtonWrapper';
import ViewOptionWrapper from './ViewOptionWrapper';

export default class TopOperationPart extends Component {
  render() {
    const buttonWrapper = new ButtonWrapper().el;
    const viewOptionWrapper = new ViewOptionWrapper().el;

    this.el.classList.add('top-manipulate-part');
    this.el.append(
      buttonWrapper,
      viewOptionWrapper
    );
  }
}