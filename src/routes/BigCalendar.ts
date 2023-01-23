import { Component } from '../core/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import Interaction from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import '../../css/fullcalendar.scss'

export default class BigCalendar extends Component {
  render() {
    this.el.classList.add('calendar');
    const calendarEl: HTMLDivElement = document.createElement('div');
    calendarEl.id = "calendar";
    this.el.append(calendarEl);

    const DAY_NAMES = ['일','월','화','수','목','금','토'];

    const calendar: Calendar = new Calendar(calendarEl, {
      plugins: [Interaction, dayGridPlugin, timeGridPlugin],
      headerToolbar: false,
      editable: true,
      initialView: 'timeGrid',
      views: {
        timeGrid: {
          duration: {
            weeks: 1
          }
        }
      },
      dayHeaderContent: function(arg) {
        return {
          html: `<div class="ci-calendar__day-name">${DAY_NAMES[arg.date.getDay()]}</div><div class="ci-calendar__day">${arg.date.getDate()}</div>`
        }
      },
      weekends: true,
      events: [
        { title: 'Meeting', start: new Date() } // 확인용 오늘 날짜 임시 더미
      ]
    });
    calendar.setOption('height', 700); // css 적용 전 임시
    document.addEventListener("DOMContentLoaded", function() { // calendar render는 마지막에 해야 css 적용됨
      calendar.render();
    })
  }
}