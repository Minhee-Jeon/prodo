import { Component } from "../../core/core";

export default class RedButton extends Component {
    constructor(props) {
        super({
            tagName: 'button',
            props
        });
    };

    render() {
        const { message, width, height, fontWeight = 'normal' } = this.props;
        this.el.innerText = message;
        this.el.style.width = width;
        this.el.style.height = height;
        this.el.style.fontWeight = fontWeight;
    };
};