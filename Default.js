import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Default extends Component{
    render(){
        return(
            <div className="app">
                <div className="app-header">
                    <div className='1app-header-title'>
                        <h1>Default component</h1>
                    </div>
                <div>
                    <Link to="/">Home</Link> |
                    <Link to="/about">About</Link> |
                    <Link to="/nowhere">Faulty link</Link> |
                    <Link to="/category/movies">Category: movies</Link> |
                    <Link to="/category/faily">Category: fail (with redirect)</Link> |
                    <Link to="/sample/42/isaac">Sample: 2 params</Link> |
                    <Link to="/sample/o/fail">Sample: fail (will redirect) </Link> |
                </div>
            </div>
        </div>

        );
    }
}
export default Default;