import React from 'react';
import ReacliOM from 'react-dom';

//import react-paginate
import ReactPaginate from 'react-paginate';

//import axios
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [{ "date": "-300", "description": "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.", "lang": "en", "category1": "By place", "category2": "Greece", "granularity": "year" }],
      currentSearch: '',
      offset: 0,
      eventsPerPage: 10,
      currentPage: 0,
      pageCount: 10
    }

    this.handleChange = this.handleChange.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  //when the component mounts, set the events array in state to be equal to the data in db.json by sending get request
  //TODO: SET THE PAGE COUNT TO CORRECT NUM OF PAGES WHEN COMPONENT MOUNTS
  componentDidMount() {
    //send an axios get request
    axios.get('/events?_page=1')
      .then((results) => {
        // then populate the state
        this.setState({
          events: results.data
          //pageCount: ??
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
    //send a get request with the keyword as the filter
    axios.get(`/events/?q=${keyword}`)
      .then((results) => {
        //calculate number of pages
        var numPages = Math.ceil(results.data.length / this.state.eventsPerPage);
        console.log('RESULTS', results)
        //TODO: if the results sent back are empty
        //then...??
        //set state to be equal to the results returned
        this.setState({
          events: results.data,
          pageCount: numPages
        });
        console.log('numberPages', this.state.pageCount);
      })
      .catch((err) => {
        console.log('There was an error retrieving events with the searched keyword', err);
      });
  }


  //function to handle the page click
  handlePageClick = (e) => {
    console.log('PAGE CLICK', e);
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.eventsPerPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
    });
    //invoke get request to retrieve data for the clicked page
    console.log('PAGE CLICK STATE', this.state.currentPage, this.state.offset);
};


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
          <button type="submit" onClick={this.searchKeyword}> Submit </button>
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
        <div>
          <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    // breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    // containerClassName={"pagination"}
                    // subContainerClassName={"pages pagination"}
                    // activeClassName={"active"}
                    />
        </div>
      </div>
    )
  }
}


ReacliOM.render(< App />, document.getElementById('app'));
