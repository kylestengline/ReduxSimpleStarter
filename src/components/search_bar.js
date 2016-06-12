import React, { Component } from 'react';
// whenever we translate the jsx to normal javascript we create a call named
// React.createelement. That's why we have to import react
//const SearchBar = () => {
 // return <input />;
//};
// Every react component that is class based, must have a render method
// When we define a render function(which we always do on a class) we must return some JSX. 
class SearchBar extends Component {
//we define a new class called SearchBar and give it access to all functionality
// from React.Component class. 
   render() {
    return <input />; 
  }
}
// When to use class based vs functional component = Start with functional
// component and only when you decide to add some more functionality, then make
// it a class
// JSX is something that will eventually be rendered to the DOM
//any file in app that import searchBar will get our searchbar components
export default SearchBar;
