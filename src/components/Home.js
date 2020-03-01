import React, { Component, useState } from "react"
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coins: []
    }
  }

  componentDidMount() {
    // Where we're fetching data from
    fetch(`http://localhost:3001/coins`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data => {
        // console.log(data)
        this.setState({
          coins: data.coins
        })

      }
      )
      // Catch any errors we hit and update the app
      .catch(error => console.error());
  }

  editTask(id) {

  }

  deleteTask(id) {
    console.log('here we are', id)
  }

  TableRow({ index, item, deleteItem }) {
    let id = item._id;
    let pathEdit = '/edit/' + item._id
    let pathDelete = '/delete/' + item._id
    return <tr>
      <td>{index}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><Link to={pathEdit}>Edit</Link></td>
      {/* <td><Link to={{pathname: pathEdit}} params={{ id: item._id }}>Edit</Link></td> */}
      <td><Link to={pathDelete}>Delete</Link></td>
      {/* <td>  <Button variant="danger" onClick={deleteItem()}>Danger</Button></td> */}
    </tr>
  }

  render() {
    let index = 1;
    let coinsItems = (this.state.coins != []) ? (this.state.coins) : ([])
    console.log(this.coinsItems)
    return (<>
      <Container>
        <Row >
          <Col >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>EDIT</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {coinsItems.map((item) => <this.TableRow key={item._id} index={index++} item={item} deleteItem={this.deleteTask} />)}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>)
  }
}

export default Home

