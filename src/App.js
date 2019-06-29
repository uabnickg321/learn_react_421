import React from 'react';
import Header from './components/Header';
import SearchList from './components/SearchList';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

// The main class based component. This is what gets sent to index.html.

class App extends React.Component {
  constructor(props) {
    super(props);
    // Must bind the 'this' event handler to THIS component instance. This function can now be passed as a callback without
    // losing its context.
    this.handleChange = this.handleChange.bind(this);
    // Initialize the state for this component.
    this.state = {
      hits: [],
      filtered: []
    };
  }

  // A 'Life-Cycle' method. This method will run when the component mounts to the screen. This method utilizes axios -
  // a third party library which is a promise-based HTTP client. In this case being used to fetch data from the HN API.
  // This function uses 'Async/Await', which is a special JavaScript syntax for handling promise based requests, such as axios.
  async componentDidMount() {
    try {
      // Fetch the api results and store it in a local variable 'result'
      const result = await axios.get(API + DEFAULT_QUERY);

      // Update the state of this component to store the results in our state array 'hits'
      this.setState({
        hits: result.data.hits
      });
    } catch (err) {
      // Simple error handling should something go wrong with the fetching
      console.error(err.message);
    }
  }

  // A method to handle user search queries. Takes 'e'(event) as a parameter
  handleChange(e) {
    // Create two new local variables so we do not lose our data from the API request
    let currentList = [];
    let newList = [];
    // e.preventDefault() stops the event from executing its default behavior
    e.preventDefault();

    // Check to see that the search bar has input
    if (e.target.value !== '') {
      // Store the data from our state in the local array 'currentList'
      currentList = this.state.hits;
      // A JavaScript higher-order array method. Returns the articles that match the user input to the 'newList' array
      newList = currentList.filter(item => {
        const lct = item.title.toLowerCase();
        const lca = item.author.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lct.includes(filter) || lca.includes(filter);
      });
    } else {
      // If no search input, return newList with all of the search results
      newList = this.state.hits;
    }

    // Set the 'filtered' state array to the value of 'newList'
    this.setState({
      filtered: newList
    });
  }

  // The render() method will render what is returned to the screen;
  render() {
    return (
      <div className='container'>
        {/* React JSX component syntax -- to put our components in the App  */}
        {/* This is also where any state/methods get passed down as 'PROPS' to the child components */}
        <Header handleChange={this.handleChange} />
        <SearchList hits={this.state.hits} filtered={this.state.filtered} />
      </div>
    );
  }
}

// Export the App for its use in 'index.js', where we call RenderDOM to output this component.
export default App;
