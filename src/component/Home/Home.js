import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DeleteConfirm from '../Modals/DeleteConfirm';
import { AddItemsToList } from './store/actions'
import { Button } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      confirmDelete: false
    }
    this.delete = this.delete.bind(this);
    this.handleClose = this.handleClose.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  delete(index) {
    this.setState({
      confirmDelete: true,
      index: index
    })

  }

  addValueToList = () => {
    let { list } = this.state;

    if (this.state.username) {
      list.push(this.state.username)
      this.setState({
        list
      }, () => { this.setState({ username: '' }) })
    }

  }

  handleClose = (stateValue) => {
    if (stateValue === 'Yes') {
      this.setState({
        list: this.state.list.filter((_, j) => j !== this.state.index)
      })
    } else {
      this.setState({
        index: ''
      })
    }

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
              this.state.list.map((data, i) => (
                <li key={i}>{data} <button onClick={() => this.delete(i)}>delete</button></li>
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
    username: state.login.username
  }
};

export default withRouter(connect(mapStateToProps, {
  addItems: AddItemsToList.addItem
})(Home));
