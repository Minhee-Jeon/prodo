import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import { Component } from "../../core/core";

export default class MiniCalendar extends Component {
    render() {
        const calendar = new Calendar(this.el, {
            plugins: [dayGridPlugin],
            initialView: 'dayGridMonth',
            contentHeight: 'auto',
            headerToolbar: {
                start: 'title',
                end: 'prev,next'
            },
            locale: 'ko',
            dayCellClassNames: 'day-cell',
            dayCellContent: (args) => {
                return args.dayNumberText.replace('일', '');
            }
        });

        document.addEventListener('DOMContentLoaded', function () {
            calendar.render();
        });
    }
}