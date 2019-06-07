import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DeleteConfirm from '../Modals/DeleteConfirm';
import { ToDoList } from './store/actions'
import { Button } from 'react-bootstrap';
class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      confirmDelete: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onDelete(index) {
    this.setState({
      confirmDelete: true,
      index: index,
    })
  }

  addValueToList = () => {
    let { list } = this.state;

    if (this.state.username) {
      list.push(this.state.username)
      this.setState({
        list
      }, () => { 
        this.props.addItems(list);
        this.setState({ username: '' }) 
      })
    }
  }

  handleClose = (stateValue) => {
    if (stateValue === 'Yes') 
      this.props.removeItems(this.props.listOfUsers,this.state.index)
    else 
      this.setState({ index: '' })
    
    this.setState({
      confirmDelete: !this.state.confirmDelete
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>List of Users</h1>
          Add User <input name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
          <Button onClick={this.addValueToList}>Add</Button>
          <ul>
            {
              this.props.listOfUsers.length > 0 && 
                this.props.listOfUsers.map((data, i) => (
                    <li key={i}>{data} <Button onClick={() => this.onDelete(i)}>delete</Button>
                    <Button onClick={() => this.editList(i)}>Edit</Button>
                    </li>
                  ))
            }
          </ul>
        </div>
        {
          this.state.confirmDelete ?
            <DeleteConfirm showModal={this.state.confirmDelete} handleClose={this.handleClose} />
            : null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    listOfUsers:state.listOfUsers.users 
  }
};

export default withRouter(connect(mapStateToProps, {
  addItems: ToDoList.addItem,
  removeItems: ToDoList.removeItem,
})(Home));
