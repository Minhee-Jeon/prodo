import { Component } from "../../core/core";
import Icon from "../common/Icon";

export default class Search extends Component {
  render() {
    this.el.classList.add('left-search');

    const icon = new Icon({ iconName: 'search', width: '15px', height: '15px', color: '#828282' }).el;
    this.el.innerHTML = `<input type='text' placeholder='검색' />`
    this.el.append(icon);
  }
}