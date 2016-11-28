import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// go find the library called react and assign it to the variable react.
// same with ReactDOM. You will have to go to react github to download ReactDOM for later projects
import YTSearch from 'youtube-api-search';
// should be specific when referencing components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import API_KEY from '../keys';


// const is similar to var, but const means it doesn't change.
// We're assigning app as a function.
// We use JSX to make our code a lot more legible.
// Class is used whenever we want to have the concept of state in our components.
// Create a new component. This component should produce html. 
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch('surfboards');
  }
// this.setState({ videos: videos }) when the key and value are the same, we can just pass in the key and react will be smart enough to know what to do.
//refactored the youtube search into it's own method and takes a single string: the search term. We took that method and we pass it into the search bar under the property onSearchTermChange. All search bar has to do is call onSearchTermChange with a new search term and that calls our search term function which will render new videos as you type in the search bar. Then see search_bar.js 
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); 
//this function calls debounce and will only be called once every 300 miliseconds. It won't crash, it will only run every 300 miliseconds. We pass this into search bar and that way when the user types it will only render every 300 miliseconds giving the user time to type before search results appear.
// We use functional components like the video list or video list items when we have a simple component that takes some number or properties and returns some amount of static JSX
// the text after return is known as JSX which is a subset of JavaScript allowing us to write what looks like html, but is really, behind the scenes, JavaScript
// JSX gets transpiled to es6
    return ( 
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}
//Defined a function to update apps state. takes a video and updates the selected video. We pass onVideoSelect as a property into video_list. Video_list takes that property and passes it into video_list_item. video_list_item takes that property and says whenever I get clicked, then call that function with the video that was selected.
//instead of writing function, we can do the above. In react we use the above more so than writing function 
//when we create component, we create a type or class of component. App is a class not a instance
//JS Modules = all code we write in seperate files is siloed from other code and libraries that we write in our project. Code that is declared in other files we have no contact from the those files unless we explicitly say we want access to code in the other file.

// Take this componenet's generated html and put it on the page. (in the DOM) 
ReactDOM.render(<App />, document.querySelector('.container'));
//div class or id is the root node of the entire react app. > in index.html 
//When we write JSX tags it creates an element for us. When we put a component name in their, the component name is a component class, but using it inside jsx turns it into a component instance. So, when we pass in App we're calling a class and not an instance. Therefore we have to put a JSX tag around it, which creates an instance.
//When we write the above, we are saying write this app and render the html to this element. Think of it as a target DOM node. Render this app to <this place>
//ReactDOM is used to interact with the actual dom while React is used to create and manage our components
