import { Component } from '../../core/core';
import Icon from '../common/Icon';
import IconButton from '../common/IconButton';
import WeekDayRange from './WeekDayRange';
import WeekIndicator from './WeekIndicator';

export default class TimeIndicator extends Component {
  render() {
    const arrowBackIcon = new Icon({ iconName: 'arrowBack', size: {}, color: '#090909' }).el;
    const arrowForwardIcon = new Icon({ iconName: 'arrowForward', size: {}, color: '#090909' }).el;
    const arrowBackButton = new IconButton({ iconEl: arrowBackIcon }).el;
    const arrowForwardButton = new IconButton({ iconEl: arrowForwardIcon }).el;
    const weekIndicator = new WeekIndicator().el;
    const weekDayRange = new WeekDayRange().el;

    this.el.append(
      arrowBackButton,
      arrowForwardButton,
      weekIndicator,
      weekDayRange
    );
  }
}