import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class EditModel extends Component {
    constructor(props){
        super(props)
        this.state={
            username:this.props.editdetails.username,
            lastname:this.props.editdetails.lastname,
            age:this.props.editdetails.age,
            contactno:this.props.editdetails.contactno
        }
    }
    handleChange = (e) => {
        console.log("fbfsdfsd")
        this.setState({
          [e.target.name]: e.target.value,
        })
      }

    render() {
        console.log("safmdmfsdfmsmf")
        return (
            <Modal show={this.props.showModal} onHide={()=>this.props.handleClose('Close')}>
                <Modal.Header>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                <div>
                    <h1>List of Users Add User </h1>
                    User Name : <input name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
                    Last Name : <input name="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)} />
                    Age : <input name="age" value={this.state.age} onChange={(e) => this.handleChange(e)} />
                    Contact No. : <input name="contactno" value={this.state.contactno} onChange={(e) => this.handleChange(e)} />
           </div> 
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addValueToList}>Add</Button>
                    <Button className="btn btn-danger" onClick={()=>this.props.handleClose('Yes')} >Yes</Button>
                    <Button className="btn btn-danger" onClick={()=>this.props.handleClose('No')} >No</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default EditModel;