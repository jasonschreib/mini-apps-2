import React from 'react';
import ReactDOM from 'react-dom';

import Chart from 'chart.js/auto';

class TimeSeries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate() {
    console.log('props', this.props);
    //setup
    const labels = this.props.labels;
    const data = {
      labels: labels,
      datasets: [{
        label: 'Bitcoin USD Price - Last 31 Days',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: this.props.dataPoints,
      }]
    };

    //config
    const config = {
      type: 'line',
      data: data,
      options: {}
    };

    const myChart = new Chart(
    document.getElementById('myChart'),
    config);
  }


  render() {
    return (
      <div>
      <canvas id="myChart"></canvas>
      </div >
    );
  }

}

export default TimeSeries;
