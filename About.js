import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class About extends Component{
   
    render(){
        console.log("llego a About");
        return(
            <div className="app">
                <div className="app-header">
                    <div className="1app-header-title">
                        <h1>About Component</h1>
                    </div>
                    <div>
                        This is what about page is all about  
                        <Link to="/"> Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;