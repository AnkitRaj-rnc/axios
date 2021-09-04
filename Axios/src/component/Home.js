import axios from "axios";
import React from "react"
import { Link } from "react-router-dom";
import Index from "./Index"
import "./style.css"


class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user:[]
    }
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res =>{
      this.setState( { user: res.data})
      console.log(res.data)

    })
  }

  render(){

    const {match: { params: { id } } } = this.props
    const {name, username, email, phone, address} = this.state.user.find(item => item.id == id) || {}

    console.log(this.props)
    
    return(
      <>
        <div className="userDetail">

          <table className="tabel">
            <tr>
              <td>Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>User Name:</td>
              <td>{username}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{address?.city} </td>
            </tr>
            <tr>
              <td>Street:</td>
              <td>{address?.street} </td>
            </tr>
          </table>
        </div>
         <button className="btn btn-dark btt1">
         <Link to="/index">Go to User Page</Link>
           </button> 
      </>
    )
}
}

export default Home;