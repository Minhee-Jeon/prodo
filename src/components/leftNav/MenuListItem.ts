import { Component } from "../../core/core";
import Icon from "../common/Icon";

export default class MenuListItem extends Component {
    constructor(props) {
        super({
            tagName: 'li',
            props
        });
    }

    render() {
        const { iconName, label } = this.props;
        const icon = new Icon({ iconName: iconName, size: { width: '19px', height: '19px' } }).el;

        this.el.classList.add('menu-item');
        this.el.innerHTML = `<p>${label}</p>`
        this.el.prepend(icon);
    }
}