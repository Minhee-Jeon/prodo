import { Component } from '../../core/core';

export default class IconButton extends Component {
  constructor(props) {
    super({
      tagName: 'button',
      props
    });
  };
  render() {
    const { iconEl } = this.props;
    this.el.append(iconEl);
    this.el.classList.add('icon-button');
  };
}