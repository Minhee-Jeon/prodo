import { Component } from '../../core/core';
import { icons } from '../../const/icons';

const DEFAULT_STYLE = {
  width: '24px',
  height: '24px',
  color: '#828282'
};

export default class Icon extends Component {
  constructor(props: { [key: string]: string }) {
    super({
      tagName: 'span',
      props
    });
  }

  render() {
    const { iconName, width, height, color } = this.props;
    this.el.innerHTML = icons[iconName];

    const svg = this.el.children[0] as HTMLElement;
    svg.style.width = width ? width : DEFAULT_STYLE.width;
    svg.style.height = height ? height : DEFAULT_STYLE.height;
    svg.style.fill = color ? color : DEFAULT_STYLE.color;
  }
}