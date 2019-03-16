import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// import Calendar from './components/calendar/calendar';
// import CalendarRange from './components/calendar/calendar-range';
// import CalendarRangeMark from './components/calendar/calendar-range-mark';
// import Charts from './components/charts/charts';
import App from './App';

// ReactDOM.render(<Calendar />, document.getElementById('root'));
// ReactDOM.render(<CalendarRange />, document.getElementById('root'));
// ReactDOM.render(<CalendarRangeMark />, document.getElementById('root'));
// ReactDOM.render(<Charts />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
