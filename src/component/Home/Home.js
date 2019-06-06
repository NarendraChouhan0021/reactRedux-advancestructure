import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

// import ListArray from '../listarray/listarray'

class Home extends Component {
  constructor(props){
    super(props)
    let list=[
      {id:0,name:'Tom Jackson'},
      {id:1,name:'Jon Snow'},
      {id:2,name:'Merry Han'}
    ]
    this.state={
      list:list
    }
    this.delete = this.delete.bind(this);
  }
  
  delete(index){
    //e.preventDefault()
    this.setState({
      list:this.state.list.filter((_,j)=>j!==index)   
    })
  }

  render() {
    console.log("this.props................",this.props.username)
    return (
      <div>
        <h1>List of Users</h1>
        <ul>
            {
                this.state.list.map((data,i)=>(
                    <li key={i}>{data.name} <button onClick={()=>this.delete(i)}>delete</button></li>
                ))
            }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username:state.login.username
   }
};

export default  withRouter ( connect(mapStateToProps) (Home));
