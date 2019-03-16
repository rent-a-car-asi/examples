import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Boston", "Lowell", "Cambridje"],
        datasets: [
          {
            label: "Population",
            data: [10, 60, 30],
            backgroundColor: ["red", "green", "yellow"]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div class="row">

        <div class="col-6">
          <div className="chart">
            <Bar
              data={this.state.chartData}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        <div class="col-6">
          <div className="chart">
            <Pie
              data={this.state.chartData}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        <div class="col-12">
          <div className="chart">
            <Line
              data={this.state.chartData}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
