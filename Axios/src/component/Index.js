import React from "react"
import axios from "axios"
import "./style.css"
import {Link} from "react-router-dom"



class Index extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      name:"",
      userName:"",
      email:"",
      address:"",
    }
 }

 componentDidMount(){
   axios.get(`https://jsonplaceholder.typicode.com/users`).then(res =>{
     console.log(res.data)
     this.setState({ data: res.data})
   })
 }

 handleChange= e =>{
    this.setState({ [e.target.name]: e.target.value })
 }

 handleUser =(e)=>{
   e.preventDefault()
   console.log(this.state)
   axios.post(`https://jsonplaceholder.typicode.com/posts`, this.state).then(res =>{
     console.log(res)
   })
 }
 
  

  render(){
    const { name, userName, email, address } = this.state
    return(
      <main>
        <h1 className="heading">Digikull Students</h1>
        < div className="div">
          <div>
            <form onSubmit={this.handleUser}>
                  <label>Name:</label><br/>
                  <input type="text" name="name" className="cInput" value={name} onChange={this.handleChange}/><br/>
                  <label>User_Name:</label><br/>
                  <input type="text" name="userName" className="cInput" value={userName} onChange={this.handleChange}/><br/>
                  <label>Email:</label><br/>
                  <input type="email" name="email" className="cInput" value={email} onChange={this.handleChange}/><br/>
                  <label>Address:</label><br/>
                  <input type="text" name="address" className="cInput" value={address} onChange={this.handleChange}/><br/><br/>
                  <button type="submit" className="btn btn-dark btt">Add User</button>
                  <Link to="/" className="home">
            <button className="btn btn-dark">Go to Home Page</button>
            </Link>
            </form>
          </div>
          </div>

          <div className="div1">
            
              {this.state.data.map(item => <div key={item.id} className="user"> <Link to={`/index/${item.id}`}>{item.name} </Link> </div> )}
            
          </div>
          {/* <div className="home">
            <Link to="/">
            <button className="btn btn-dark">Go to Home Page</button>
            </Link>
          </div> */}
      
    </main>  
    )
  }
}

export default Index; 