import {CalendarAPI} from './CalendarAPI.js';

(async () => {
    const calendarAPI = new CalendarAPI();

    calendarAPI.logResult(await calendarAPI.getData());
})();
