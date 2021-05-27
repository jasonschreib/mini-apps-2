import React from 'react';
import ReacliOM from 'react-dom';

//import axios
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [{ "date": "-300", "description": "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.", "lang": "en", "category1": "By place", "category2": "Greece", "granularity": "year" }],
      currentSearch: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
  }

  //when the component mounts, set the events array in state to be equal to the data in db.json by sending get request
  componentDidMount() {
    //send an axios get request
    axios.get('/events?_limit=10')
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

  // function that will automatically update the state as the user types
  handleChange(event) {
    this.setState({ currentSearch: event.target.value });
    console.log('Search', this.state.currentSearch);
  }


  // function when the submit button is clicked - will filter events based on searched keyword
  searchKeyword = (e) => {
    console.log('keyword search event', e);
    // e.preventDefault();
    //get the keyword searched
    var keyword = this.state.currentSearch;
    console.log('keyword', keyword);
    //send a get request with the keyword as the filer
    axios.get(`/events/?q=${keyword}`)
      .then((results) => {
        //TODO: if the results sent back are empty
        //then...??
        //set state to be equal to the results returned
        this.setState({
          events: results.data
        });
        console.log('Events', this.state.events);
      })
      .catch((err) => {
        console.log('There was an error retrieving events with the searche keyword', err);
      });
  }


  render() {
    return (
      <div>
        <div>
          <h1>Historical Events Finder</h1>
        </div>
        <form onSubmit={(e) => {e.preventDefault()}}>
          <label>
            Search by any Keyword:
    <input type="text" name="keyword" value={this.state.currentSearch} onChange={this.handleChange} />
          </label>
          <button type="submit" value="Submit" onClick={this.searchKeyword}/>
        </form>

        <div>
          Events:
          {/* For each item in the state array object, list out its date, description, and language */}
          {Object.entries(this.state.events).map((currEvent) => {
            // console.log('CURR event', currEvent[1]);
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
