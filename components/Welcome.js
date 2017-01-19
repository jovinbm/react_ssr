import React from 'react';

export const Welcome = React.createClass({
  
  propTypes: {
    nick_name: React.PropTypes.string.isRequired
  },
  
  getInitialState(){
    
    // executes on server
    
    return {
      first_name : 'Jovin',
      middle_name: 'Beda',
      last_name  : void 0
    };
  },
  
  componentWillMount(){
    
    // executes on server
    
    this.setState({
      last_name: 'Mwilanga'
    });
    
  },
  
  componentDidMount(){
    
    // does not execute on server
    
    this.setState({
      first_name: 'Deonatus',
      last_name : 'mwilanga'
    });
    
  },
  
  render(){
    
    const {
            first_name,
            middle_name,
            last_name
          } = this.state;
    const {
            nick_name
          } = this.props;
    
    return (
      
      <div>
        
        <h1>My name is {first_name} {middle_name} {last_name} a.k.a {nick_name}</h1>
      
      </div>
    
    );
    
  }
  
});