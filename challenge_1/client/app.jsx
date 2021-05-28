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
      keyword: '',
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
    this.setState({ keyword: event.target.value });
    console.log('Search', this.state.keyword);
  }


  // function when the submit button is clicked - will filter events based on searched keyword
  searchKeyword = (e) => {
    console.log('keyword search event', e);
    // e.preventDefault();
    //get the keyword searched
    var keyword = this.state.keyword;
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
          pageCount: numPages
        });
        console.log('numberPagesYUP', this.state.pageCount);
      })
      .then(() => {
        //send a get request for the data from the first page
        axios.get(`/events/?q=${keyword}&_page=1`)
        //update the state
          .then((pageOneResults) => {
            this.setState({
              events: pageOneResults.data
            });
          })
          .catch((err) => {
            console.log('There was an error retrieving items from page One', err);
          })
      })
      .catch((err) => {
        console.log('There was an error retrieving events with the searched keyword', err);
      });
  }


  //function to handle the page click
  handlePageClick = (e) => {
    console.log('PAGE CLICK', e);
    const selectedPage = e.selected + 1;

    this.setState({
        currentPage: selectedPage
      }, () => {
        console.log('PAGE CLICK STATE YUPP', this.state.currentPage);
      //send get request to retrieve data for the clicked page
      axios.get(`/events/?q=${this.state.keyword}&_page=${this.state.currentPage}`)
        .then((pageResults) => {
          //update the events in state to this page's data
          this.setState({
            events: pageResults.data
          });
          console.log('New page', this.state.events);
        })
    });
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
    <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleChange} />
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
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    />
        </div>
      </div>
    )
  }
}


ReacliOM.render(< App />, document.getElementById('app'));
