import { Component } from '../core/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import Interaction from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import momentPlugin from '@fullcalendar/moment';

import '../../css/fullcalendar.scss'

export default class BigCalendar extends Component {
  private static DAY_NAMES = ['일','월','화','수','목','금','토'];
  private static TIMEGRID_OPTIONS : CalendarOptions = {
    plugins: [Interaction, dayGridPlugin, timeGridPlugin, momentPlugin],
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
    allDaySlot : true,
    dayHeaderContent: function(timeObj) {
      return {
        html: `<div class="calendar__day-name day_no-${timeObj.date.getDay()}">${BigCalendar.DAY_NAMES[timeObj.date.getDay()]}</div><div class="calendar__date">${timeObj.date.getDate()}</div>`
      }
    },
    slotLabelContent: function (date) {
      let curHour = date.date.getHours();
      if(curHour === 0) {
        return {html: `<div class="fc-timegrid-slot-label_meridiem" ></div><div class="fc-timegrid-slot-label_hour"></div>`};
      }
      let meridiem = 'AM';
      let zeroFormat = '';
      if (curHour > 12) {
        curHour -= 12;
        meridiem = 'PM';
      }
      if (curHour < 10) {
        zeroFormat = '0';

      }
      return {html: `<div class="fc-timegrid-slot-label_meridiem" >${meridiem}</div><div class="fc-timegrid-slot-label_hour">${zeroFormat}${curHour}</div>`};
    },
    weekends: true,
    events: [
      { title: 'Meeting', start: new Date() } // 확인용 오늘 날짜 임시 더미
    ]
  }

  private static MONTH_OPTIONS : CalendarOptions = {
    plugins: [Interaction, dayGridPlugin],
    headerToolbar: false,
    editable: true,
    initialView: 'dayGridMonth',
    dayHeaderContent: function(timeObj) {
      return {
        html: `<div class="calendar__day-name">${BigCalendar.DAY_NAMES[timeObj.date.getDay()]}</div>`
      }
    },
    dayCellContent: function(timeObj) {
      const eachDate = timeObj.date.getDate().toString();
      return ("0" + eachDate).substring(eachDate.length - 1, eachDate.length + 1);
    },
    events: [
      { title: 'Meeting', start: new Date() } // 확인용 오늘 날짜 임시 더미
    ]
  }

  render() {
    this.el.id = 'routes_div';
    const calendarEl: HTMLDivElement = document.createElement('div');
    calendarEl.id = "bigCalendar";
    this.el.append(calendarEl);

    const calendar: Calendar = new Calendar(calendarEl, BigCalendar.TIMEGRID_OPTIONS);
    // calendar.setOption('height', 700); // css 적용 전 임시
    document.addEventListener("DOMContentLoaded", function() { // calendar render는 마지막에 해야 css 적용됨
      calendar.render();
      const headerScrollers = calendarEl.getElementsByClassName('fc-scroller');
      for(let i = 0; i < headerScrollers.length; ++i) {
        if(!headerScrollers.item(i)?.classList.contains('fc-scroller-liquid-absolute')) {
          headerScrollers.item(i)?.setAttribute('style','');
        }
      }
    })
  }
}