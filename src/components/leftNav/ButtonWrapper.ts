import { Component } from "../../core/core";
import RedButton from "../common/RedButton";

export default class ButtonWrapper extends Component {
    render() {
        const addProjectBtn = new RedButton({ message: '프로젝트 추가', width: '100%', height: '42px', fontWeight: 'bold' }).el;
        const addToDo = new RedButton({ message: '할일 추가', width: '102px', height: '42px' }).el;
        const addEvent = new RedButton({ message: '이벤트 추가', width: '102px', height: '42px' }).el;

        const smallBtnWrapper = document.createElement('div');
        smallBtnWrapper.classList.add('small-btn-wrapper');
        smallBtnWrapper.append(addToDo, addEvent);

        this.el.classList.add('btn-wrapper');
        this.el.append(addProjectBtn, smallBtnWrapper);
    }
}