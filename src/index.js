import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// go find the library called react and assign it to the variable react.
// same with ReactDOM. You will have to go to react github to download ReactDOM for later projects
import YTSearch from 'youtube-api-search';
// should be specific when referencing components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

import API_KEY from '../keys';


// Create a new component. This component should produce html. 

// const is similar to var, but we're saying that this variable is never going to change. App is never going to be anything else.
// We're assigning app as a function.
// the text after return is known as JSX which is a subset of JavaScript allowing us to write what looks like html, but is really, behind the scenes, JavaScript
// JSX gets transpiled to es6
// We use JSX to make our code a lot more legible.
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: []  };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }
      // this.setState({ videos: videos }) when the key and value are the same, we can just pass in the key and react will be smart enough to know what to do.
  render() {
    return ( 
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//instead of writing function, we can do the above. In react we use the above
//more so than writing function 
//when we create component, we create a type or class of component. App is a class not a instance
//JS Modules = all code we write in seperate files is siloed from other code and libraries that we write in our project. Code that is declared in other files we have no contact from the those files unless we explicitly say we want access to code in the other file.

// Take this componenet's generated html and put it on the page. (in the DOM) 
ReactDOM.render(<App />, document.querySelector('.container'));
//div class or id is the root node of the entire react app. > in index.html 
//When we write JSX tags it creates an element for us. When we put a component name
//in their, the component name is a component class, but using it inside jsx
//turns it into a component instance. So, when we pass in App we're calling a
//class and not an instance. Therefore we have to put a JSX tag around it, which
//creates an instance.
//When we write the above, we are saying write this app and render the html to
//this element. Think of it as a target DOM node. Render this app to <this
//place>
//ReactDOM is used to interact with the actual dom while React is used to create and manage our components
