import React from 'react';
import ReactDOM from 'react-dom';

//import axios
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  //when the component mounts, set the events array in state to be equal to the data in db.json by sending get request
  componentDidMount() {
    //send an axios get request
    axios.get('/events')
      .then((results) => {
        console.log('RESULTS', results.data);
        //then populate the state
        this.setState({
          events: results.data
        });
      })
      .catch((err) => {
        console.log('There was an error with componentDidMount get request');
      });
  }





  render() {
    return (
      <div>
        <div>
          <h1>Historical Events Finder</h1>
        </div>
        <form>
          <label>
            Search by any Keyword:
    <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div>
          Events:

        </div>

      </div>
    )
  }
}


ReactDOM.render(< App />, document.getElementById('app'));
