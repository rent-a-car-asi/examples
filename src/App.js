import React, { Component } from "react";
import "./App.css";

import Calendar from "./components/calendar/calendar";
import CalendarRange from "./components/calendar/calendar-range";
import CalendarRangeMark from "./components/calendar/calendar-range-mark";
import Charts from "./components/charts/charts";

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Charts />
          </div>
          <div class="col-6">
            <CalendarRange />
          </div>
          <div class="col-6">
            <CalendarRangeMark />
          </div>
          <div class="col-12">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
