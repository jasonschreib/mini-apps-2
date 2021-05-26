import React from 'react';
import ReacliOM from 'react-dom';

//import axios
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [{ "date": "-300", "description": "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.", "lang": "en", "category1": "By place", "category2": "Greece", "granularity": "year" }]
    }
  }

  //when the component mounts, set the events array in state to be equal to the data in db.json by sending get request
  componentDidMount() {
    //send an axios get request
    axios.get('/events')
      .then((results) => {
        // then populate the state
        this.setState({
          events: results.data
        });
        console.log('Events', this.state.events);
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
          {/* For each item in the state array object, list out its date, description, and language */}
          {Object.entries(this.state.events).map((currEvent) => {
            console.log('CURR event', currEvent[1]);
            return (
              <div>
                <ul> date: {currEvent[1].date}
                  <li>description: {currEvent[1].description}</li>
                  <li>lang: {currEvent[1].lang}</li>
                  <li>category1: {currEvent[1].category1}</li>
                  <li>category2: {currEvent[1].category2}</li>
                  <li>granularity: {currEvent[1].granularity}</li>
                </ul>
              </div>
            )
          })}
        </div>

      </div>
    )
  }
}


ReacliOM.render(< App />, document.getElementById('app'));
