import { Component } from "../../core/core";
import MenuListItem from "./MenuListItem";

const items = [{ iconName: 'cube', label: '프로젝트' }, { iconName: 'friend', label: '친구' }];

export default class MenuList extends Component {
    render() {
        const ul = document.createElement('ul');

        items.forEach((item) => {
            const menuListItem = new MenuListItem(item).el;
            ul.append(menuListItem);
        });

        this.el.append(ul);
    }
}