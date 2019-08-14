import React, { Component } from 'react';
import NewComponent from  './newcomponent';
class SimpleComponent extends Component {
    render(){
        return(
             <div>
                <h1>Hello React, please be kind with US!!!!</h1>
                <MessageComponent/>
                <NewComponent/>
             </div>   
        );
    }
}

class MessageComponent extends Component {
    render(){
        return (
            <div>
              <h2>I am the Message Component</h2>
              <input type="button" value="Click" className="btn btn-warning"/>
            </div>
        );
    }
}
 
// export the component class as Module
export default SimpleComponent;