import React, {Component} from 'react';
import './App.css';

class Form2 extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        let studies = [];
        for (let value of this.refs.form.studies){
            if (value.checked){
                studies.push (value.value);
            }
        }
        this.setState({
            username: this.refs.username.value,
            password: this.refs.password.value,
            description: this.refs.description.value,
            maritalState: this.refs.maritalState.value,
            studies: studies,
            sex: this.refs.sex.value
        })
    }
    constructor(props){
        super(props);
        this.state={username:'', password:'', description:'',maritalState:'',
                    studies: [], sex:''
        }
    }
    render(){
        return(
           <div className='Form2'>
               <header className='Form2-header'>
                   <h1 className='Form2-title'>Login Form</h1>
               </header>
               <div className='App-Form2'>
                   <form onSubmit={this.handleSubmit} ref="form">
                       <div><label>Username</label></div>
                       <div>
                           <input type="text" ref="username"/>
                       </div>
                       <div><label>Password</label></div>
                       <div>
                           <input type="text" ref="password"/>
                       </div>
                       <div><label>Descripción</label></div>
                       <div>
                           <textarea ref="description"></textarea>
                       </div>
                       <vis><label>Marital State</label></vis>
                       <div>
                           <select ref="maritalState">
                               <option value="1">Single</option>
                               <option value="2">Multiple</option>
                               <option value="3">Married</option>
                           </select>
                       </div>
                       <div><label>Studies</label></div>
                       <div>
                            <div>
                               <input type="checkbox" name="studies"
                               ref="s_primary" value="primary" id="s_primary"/>
                               <label htmlFor="s_primary">Primary</label> 
                            </div>
                            <div>
                               <input type="checkbox" name="studies"
                               ref="s_bachelor" value="primary" id="s_bachelor"/>
                               <label htmlFor="s_bachelor">Bachelor</label> 
                            </div>
                            <div>
                               <input type="checkbox" name="studies"
                               ref="master" value="master" id="master"/>
                               <label htmlFor="master">Master</label> 
                            </div>
                       </div>
                       <div><label>Sex</label></div>
                       <div>
                           <div>
                               <input type="radio" name="sex" value="male"
                               id="male" ref="sex"/>
                               <label htmlFor="male">Male</label>
                           </div>
                           <div>
                               <input type="radio" name="sex" value="female"
                               id="female" ref="sex"/>
                               <label htmlFor="female">FeMale</label>
                           </div>
                       </div>
                       <div>
                           <input type="submit" value="LOGIN"/>
                       </div>
                   </form>
                   <div>
                       {Object.keys (this.state).map ((key)=>
                       <div key={key}><b>{key}:</b>{this.state[key]}</div>)
                        }
                   </div>
               </div>
           </div>     
        );
    }
}
export default Form2;


