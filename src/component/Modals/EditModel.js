import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class EditModel extends Component {

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
                    User Name : <input name="username" value={this.props.editdetails.username} onChange={(e) => this.props.handleChange(e)} />
                    Last Name : <input name="lastname" value={this.props.editdetails.lastname} onChange={(e) => this.props.handleChange(e)} />
                    Age : <input name="age" value={this.props.editdetails.age} onChange={(e) => this.props.handleChange(e)} />
                    Contact No. : <input name="contactno" value={this.props.editdetails.contactno} onChange={(e) => this.props.handleChange(e)} />
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