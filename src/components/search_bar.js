import React, { Component } from 'react';
// whenever we translate the jsx to normal javascript we create a call named React.createelement. That's why we have to import react.

// Every react component that is class based, must have a render method
// When we define a render function(which we always do on a class) we must return some JSX. 
class SearchBar extends Component {
//we define a new class called SearchBar and give it access to all functionality from React.Component class. 
  constructor(props) {
    //functional comp do not have state, only class based comp do.
    //all js classes have a function called constructor. First and only function called automatically whenever a new instance of the class is created.
    //called when we create a new instance of SearchBar, in this case.
    super(props);
    //component has it's own constructor function. Whenever we define a method that's already defined on the parent class(Component) we can call that parent method on the parent class, by calling super.
   
    this.state = {term: '' };
  //  When we use state, we initialize it by creating a new object and assigning it to, this.state. The object we pass will contain properties we want to record on the state. In this case, we want to record the property 'term' on the state. In other words, we want to record what the user is typing in.
  }

   render() {
     //this is emitting an event.
     //to tap into a browser event we have to write the above. onChange={
     //this.<nameOfEvent>
     //Curly braces are important as well.
     //We're passing in the eventhandler to the element we want the event to
     //occur/take place in.
     //this will be triggered whenever the event occurs
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={ event => this.onInputChange(event.target.value)} />
      </div>
    );
// input is now a controlled component or form element. Controlled components have there value set by state. So, it's value only ever changes when the state changes.
//whenever we reference a JavaScript variable we wrap it in curly braces. { this.state.term } like so. 
//it's ok to reference state like this only because we're referencing it. But never make it equal to something.
  }
//first we set the state and then fires off the callback function, onSearchTermChange. Note: we probably don't need both onInputChange functions. There may be a way to refactor.
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  //To manipulate our state, we should always have this.setState
 //generally it's "on" or "handle" for event handlers then the thing you want to monitor. Which in our case, would be the input. <onNameofthingorelement, then what that element is going to do>
 //Whenever we call an event handler, we usually want to put in an argument

} //ends the class

// When to use class based vs functional component = Start with functional component and only when you decide to add some more functionality, then make it a class.
// JSX is something that will eventually be rendered to the DOM
//any file in app that import searchBar will get our searchbar components
export default SearchBar;
