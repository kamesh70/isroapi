import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Cart from './components/Cart';

class App extends Component{
  constructor() {
    super();

    this.state = {
      rockets:[],  
    }

  }
  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches?limit=10")
      .then((response) => response.json())
      .then(rockets => this.setState({ rockets: rockets }));
  }
  render() {
    
    return (
      
      <div className="container">
          <div className="row">
          
               {this.state.rockets.map((rocket) => (
                    <Cart rocket={rocket} /> 
               ))}
            
            </div>
        <h2 >Developed by kamesh sulakshane</h2>
        </div>
       
       
        
    );
  }
}

export default App;
