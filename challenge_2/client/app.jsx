import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    //when the component mounts make a request to the coindesk api
  }

  render() {
    return (
      <div>
        <a href="https://www.coindesk.com/price/bitcoin">Powered by Coindesk</a>

      </div>
    );
  }

}

ReactDOM.render(< App/>, document.getElementById('app'));