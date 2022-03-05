import React, {Component} from 'react';
import {Navigate} from 'react-router-dom';
import './App.css';

class Category extends Component{
 
    render(){
       
        console.log(' estoy en Category')
        console.log(this.props.Match.params.category);
        const category = "meierda"; 
        
        console.log(category);
        return(
            <div className="app">
                <div className="app-header">
                    <div className="1app-header-title">
                        <h1>Category component</h1>
                    </div>
                    <div>
                        {category!=='fail' ?
                            (
                                <div>This is de category page: {category}</div>
                            ) : (
                                <Navigate to={{
                                    patchname: '/404',
                                    state: {from: this.props.location, sample:666}
                                }}/>
                            )

                        }
                    </div>
                </div>
            </div>

        );
    }
}
export default Category;
