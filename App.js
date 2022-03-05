import React, {Component} from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import Default from './Default';
import NotFound from './NotFound';
import Sample from './Sample';
import About from './About';
import Category from './Category';
import './App.css';

class App extends Component{
    render(){
        console.log("empiezo");
        return(
            <div className='app'>
                <div className='app-header'>
                    <div className='app-header-title'>
                        <h1>Routing Sample</h1>
                    </div>
                    <div>
                        <Link to="/">Home</Link> |
                        <Link to="/about">About</Link> |
                    </div>
                    
                    <Routes>
                        <Route path="/" element={<Default />} exact />
                        <Route path="/404" element={<NotFound />} exact />
                        <Route path="/sample/:id" element={<Sample />} exact />
                        <Route path="/about" element={<About />} exact />
                        <Route path="/category/:category" element={<Category />} />
                        <Route component={NotFound}/>
                    </Routes>
                </div>
            </div>
        )
    }
}
export default App;