import React from "react"
import {Link} from "react-router-dom"

class Main extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    
    return(
      <>
            <div>
              <h1 className="text-center pro">Axios project</h1>
            </div>
            <div className="back">
              <div className="main1">
                  <Link to ="/index">
                      <button className="button btn">Go to user Page</button>
                  </Link>
              </div>
            </div>
         
      </>
    )
}
}

export default Main;