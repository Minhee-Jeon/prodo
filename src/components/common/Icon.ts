import { Component } from '../../core/core';
import { icons } from '../../const/icons';

const DEFAULT_STYLE = {
  width: '24px',
  height: '24px',
  color: '#828282'
};

export default class Icon extends Component {
  constructor(props) {
    super({
      tagName: 'span',
      props
    });
  }

  render() {
    const { iconName, size, color } = this.props;
    this.el.innerHTML = icons[iconName];

    const svg = this.el.children[0];
    svg.style.width = size ? size.width : DEFAULT_STYLE.width;
    svg.style.height = size ? size.height : DEFAULT_STYLE.height;
    svg.style.fill = color ? color : DEFAULT_STYLE.color;
  }
}