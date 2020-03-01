import React from 'react';
import { Link, Redirect, withRouter } from "react-router-dom";


class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.postMethod({ 'name': this.state.name, 'price': this.state.price })
        this.props.history.push('/');
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    postMethod(body) {
        fetch(`http://localhost:3001/coins/post`,
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
                //we have to navigate
            )
            // If we catch errors instead of a response, let's update the app
            .catch(error => console.error());
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="CreateTaskForm__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
            </div>
            <div className="CreateTaskForm__input">
                <label htmlFor="price">Price</label>
                <input type="text" name="price" value={this.state.price} onChange={this.onFieldChange} />
            </div>
            {/* <div className="AddAuthorForm__input">
                <label htmlFor="bookTemp">Books</label>
                {this.state.books.map((book) => <p key={book}>{book}</p>)}
                <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
                <input type="button" value="+" onClick={this.handleAddBook} />
            </div> */}
            <input type="submit" value="Add" />
        </form>;
    }
}

// function CreateTaskForm({ match, onAddAuthor }) {
//     //call api from sever.js

//     // ---------------------
//     return <div className="CreateTaskForm">
//         <h1>Add new task</h1>
//         <CreateTask onAddAuthor={onAddAuthor} />
//     </div>;
// }

export default withRouter(CreateTask);
