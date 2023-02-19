import { Component } from '../../core/core';

export default class IconButton extends Component {
  constructor(props: { [key: string]: string }) {
    super({
      tagName: 'button',
      props
    });
  };
  render() {
    const { iconEl } = this.props;
    this.el.innerHTML = iconEl;
    this.el.classList.add('icon-button');
  };
}