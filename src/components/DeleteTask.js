import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";

class DeleteTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: ''
    };
    // this.onFieldChange = this.onFieldChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDelete() {
    // event.preventDefault();
    const id = window.location.href.split('/')[window.location.href.split('/').length - 1];
    const deletePath = 'http://localhost:3001/coins/delete/' + id;
    fetch(deletePath)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(
      console.log('Deleted successfully.absolute-center')
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoading: false }));

    this.props.history.push('/');
  }

  // onFieldChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }


  componentDidMount() {
    // Where we're fetching data from
    // fetch(`http://localhost:3001/coins/Delete/5e575b549201de020c1a788b`)
    //   // We get the API response and receive data in JSON format...
    //   .then(response => response.json())
    //   // ...then we update the users state
    //   .then(data =>
    //     this.setState({
    //       name: data.name,
    //       price: data.price
    //     })
    //   )
    //   // Catch any errors we hit and update the app
    //   .catch(error => this.setState({ error, isLoading: false }));



  }


  render() {
    return (<>
      <Card className="text-center">
        <Card.Header as="h5"> Delete</Card.Header>
        <Card.Body>
          <Card.Title>Delete</Card.Title>
          <Card.Text>
            Do you want to delete this task
      </Card.Text>
          <Card.Link href="/">No</Card.Link>{'    '}
          {/* <Button variant="info" size="lg">No</Button>{'   '} */}
          <Card.Link variant="primary" size="lg" onClick={this.handleDelete} href="/">Yes</Card.Link>
        </Card.Body>
      </Card>
    </>)
  }
}

// function DeleteTaskForm({ match, onAddAuthor }) {
//   //call api from sever.js

//   // ---------------------

//   const currentData = {}

//   // return <div className="DeleteTaskForm">
//   //   <h1>Delete task</h1>
//   //   <DeleteTask />
//   //   {/* onAddAuthor={onAddAuthor} /> */}
//   // </div>;
//   return (<>
//     <Card className="text-center">
//       <Card.Header as="h5"> Delete</Card.Header>
//       <Card.Body>
//         <Card.Title>Delete</Card.Title>
//         <Card.Text>
//           Do you want to delete this task
//     </Card.Text>
//         <Card.Link href="/">No</Card.Link>{'    '}
//         {/* <Button variant="info" size="lg">No</Button>{'   '} */}
//         <Button variant="primary" size="lg" onClick={()=> console.log('here we are')}>Yes</Button>
//       </Card.Body>
//     </Card>
//   </>)
// }

export default withRouter(DeleteTask);
