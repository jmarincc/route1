/*import {Component} from 'react';
class Header extends Component{
    render(){
        return(
            <header>
                <img src={this.props.logo} className='App5-logo' alt="logo"/>
                <h1 className='App5-title'>Welcome to React</h1>
            </header>
        );
    }
}
export default Header;*/
//import React, {Component} from 'react';
export default function Header({logo, title= "Welcome to React"}){
    return(
        <header className="App-Header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className='App-title'>{title}</h1>
        </header>
    );
}