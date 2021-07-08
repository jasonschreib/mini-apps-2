import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import TimeSeries from './src/TimeSeries.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historicalData: []
    }
  }

  componentDidMount() {
    //when the component mounts make a request to the coindesk api
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((resData) => {
      //log the data
      console.log('resData', resData.data.bpi);
      //set the state to be the received data
      this.setState({
        historicalData: resData.data.bpi
      }, () => {
        console.log('State', this.state);
      })
    })
    .catch((err) => {
      console.error('there was an error retrieving data from API', err);
    })
  }

  render() {
    return (
      <div>
        <TimeSeries />
        <a href="https://www.coindesk.com/price/bitcoin">Powered by Coindesk</a>
      </div>
    );
  }

}

ReactDOM.render(< App/>, document.getElementById('app'));