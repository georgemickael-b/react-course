import React from "react";
import CounterDisplay from "../CounterDisplay";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounterAction, resetCounterAction } from "../reduxStore";

function Counter() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button className="btn btn-danger">-</button>
      <CounterDisplay count={count}></CounterDisplay>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(incrementCounterAction())}
      >
        +
      </button>
      <button
        className="btn btn-light"
        onClick={() => dispatch(resetCounterAction())}
      >
        Reset
      </button>
    </div>
  );
}

/*
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    handleCounterAction = (action) =>{
        if(action === "plus"){
            this.setState({ count : this.state.count+1})
        } 
        else if (action === "minus"){
            if(this.state.count>0){
                this.setState({count: this.state.count-1})
            }
        }
        else if(action ==="reset"){
            this.setState({count: 0})
        }
    }

    render(){
        return(
            <div className="container">
                <button className="btn btn-danger" onClick={ () => this.handleCounterAction("minus")}>-</button>
                    <CounterDisplay count={this.state.count}></CounterDisplay>
                <button className="btn btn-primary" onClick={ () => this.handleCounterAction("plus") } >+</button>
                <button className="btn btn-light" onClick={ () => this.handleCounterAction('reset') }>Reset</button>
            </div>
        )
    }
}
*/

export default Counter;
