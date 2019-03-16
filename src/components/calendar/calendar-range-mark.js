import React from "react";
import originalMoment from "moment";
import DateRangePicker from "react-daterange-picker";

import { Component } from "react";
import { extendMoment } from "moment-range";

import 'react-daterange-picker/dist/css/react-calendar.css' 
import './style.css'; 

const moment = extendMoment(originalMoment);

class CalendarRangeMark extends Component {
    constructor(props, context) {
        super(props, context);
    
        const today = moment();
    
        this.state = {
          value: moment.range(today.clone().subtract(7, "days"), today.clone())
        };
      }
    
      onSelect = (value, states) => {
        this.setState({ value, states });
      };
    
      renderSelectionValue = () => {
        return (
          <div>
            {this.state.value.start.format("YYYY-MM-DD")}
            {" - "}
            {this.state.value.end.format("YYYY-MM-DD")}
          </div>
        );
      };
    
      render() {
        return (
          <div>
            <div>{this.renderSelectionValue()}</div>
    
            <DateRangePicker
              defaultState="available"
              dateStates={[
                {
                  state: "enquire",
                  range: moment.range(
                    moment()
                      .add(2, "weeks")
                      .subtract(5, "days"),
                    moment()
                      .add(2, "weeks")
                      .add(6, "days")
                  )
                },
                {
                  state: "unavailable",
                  range: moment.range(
                    moment().add(3, "weeks"),
                    moment()
                      .add(3, "weeks")
                      .add(5, "days")
                  )
                }
              ]}
              stateDefinitions={{
                available: {
                  color: null,
                  label: "Available"
                },
                enquire: {
                  color: "#ffd200",
                  label: "Enquire"
                },
                unavailable: {
                  selectable: false,
                  color: "#78818b",
                  label: "Unavailable"
                }
              }}
              value={this.state.value}
              onSelect={this.onSelect}
            />
          </div>
        );
      }
}

export default CalendarRangeMark;


const stateDefinitions = {
    available: {
      color: null,
      label: 'Available',
    },
    enquire: {
      color: '#ffd200',
      label: 'Enquire',
    },
    unavailable: {
      selectable: false,
      color: '#78818b',
      label: 'Unavailable',
    },
  };
