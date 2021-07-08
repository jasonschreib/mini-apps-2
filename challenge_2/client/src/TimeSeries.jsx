import React from 'react';
import ReactDOM from 'react-dom';

import Chart from 'chart.js/auto';

class TimeSeries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    //setup
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
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
