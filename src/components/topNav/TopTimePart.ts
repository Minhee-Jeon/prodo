import { Component } from '../../core/core';
import Icon from '../common/Icon';
import IconButton from '../common/IconButton';
import WeekDayRange from './WeekDayRange';
import WeekIndicator from './WeekIndicator';

export default class TimeIndicator extends Component {
  render() {
    const arrowBackButton = new IconButton({ 
      iconEl: new Icon({ 
        iconName: 'arrowBack', 
        size: {
          width: '21px',
          height: '20px'
        }, 
        color: '#090909'
      }).el 
    }).el;
    arrowBackButton.classList.add('back');
    const arrowForwardButton = new IconButton({ 
      iconEl: new Icon({ 
        iconName: 'arrowForward', 
        size: {
          width: '21px',
          height: '20px'
        }, 
        color: '#090909' 
      }).el 
    }).el;
    arrowForwardButton.classList.add('forward');
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon-div');
    iconDiv.append( 
      arrowBackButton,
      arrowForwardButton);

    const weekIndicator = new WeekIndicator().el;
    const weekDayRange = new WeekDayRange().el;
    const weekViewDiv = document.createElement('div');
    weekViewDiv.classList.add('week-view-div');
    weekViewDiv.append(
      weekIndicator,
      weekDayRange
    );

    this.el.classList.add('top-time-part');
    this.el.append(
      iconDiv,
      weekViewDiv
    );
  }
}