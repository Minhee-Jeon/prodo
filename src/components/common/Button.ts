import { Component } from '../../core/core';
import { BTN_COLOR } from '../../const/consts';

const DEFAULT_STYLE = {
    width: '24px',
    height: '24px',
    color: BTN_COLOR.LIGHT_GRAY
  };

export default class Button extends Component {
    constructor(props: { [key: string]: string }) {
        super({
          tagName: 'button',
          props
        });
    }
    render() {
        const { message, width, height, color } = this.props;
        this.el.classList.add('btn');
        this.el.classList.add(color);
        this.el.innerHTML = message;
        this.el.style.width = width ? width : DEFAULT_STYLE.width;
        this.el.style.height = height ? height : DEFAULT_STYLE.height;
    }
}