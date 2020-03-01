import React from 'react';
import { Link, Redirect, withRouter } from "react-router-dom";


class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: ''
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(event) {
    event.preventDefault();
    // The API where we're fetching data from
    this.postMethod(this.state.id, { 'name': this.state.name, 'price': this.state.price });
    this.props.history.push('/')
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  
  componentDidMount() {
    const id = window.location.href.split('/')[window.location.href.split('/').length - 1];
    // console.log(id)
    const pathEdit = 'http://localhost:3001/coins/edit/' + id;

    // Where we're fetching data from
    fetch(pathEdit)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          id: data._id,
          name: data.name,
          price: data.price
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  postMethod(id, body) {
    const updatePath = 'http://localhost:3001/coins/update/' + id;
    fetch(updatePath,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
      }
    )
      // We get a response and receive the data in JSON format...
      .then(response => response.json())
      // ...then we update the state of our application
      .then(
        console.log('The task is updated successfully')

      )
      // If we catch errors instead of a response, let's update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }


  render() {
    return <form onSubmit={this.handleSubmit}>
      <div className="EditTaskForm__input">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
      </div>
      <div className="EditTaskForm__input">
        <label htmlFor="price">Price</label>
        <input type="text" name="price" value={this.state.price} onChange={this.onFieldChange} />
      </div>
      <input type="submit" value="Add" />
    </form>;
  }
}

function EditTaskForm({ match, onAddAuthor }) {
  //call api from sever.js

  // ---------------------

  const currentData = {}

  return <div className="EditTaskForm">
    <h1>Edit task</h1>
    <EditTask />
    {/* onAddAuthor={onAddAuthor} /> */}
  </div>;
}

export default withRouter(EditTask);
