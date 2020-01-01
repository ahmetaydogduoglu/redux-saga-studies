import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { ageDown, ageUp, itemDel } from './store/actions/action';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ backgroundColor: "#FCF3CF", borderRadius: "20px", margin: "2rem" }}>
          <div><h2 style={{
            fontSize: "40px",
            color: "#512DA8"
          }} >Age: {this.props.age}</h2><span></span></div>
          <button onClick={this.props.onAgeUp} style={
            {
              backgroundColor: "#00FF66",
              color: "white",
              marginBottom: "2rem",
              width: "100px",
              borderWidth: "0px",
              borderRadius: "10px",
              padding: "15px 15px"
            }
          }>Age up</button>

          <button onClick={this.props.onAgeDown} style={
            {
              backgroundColor: "#FF0033",
              color: "white",
              marginBottom: "2rem",
              width: "100px",
              borderWidth: "0px",
              marginLeft: "1rem",
              borderRadius: "10px",
              padding: "15px 15px"
            }}>Age down</button>
        </div>
        <hr />
        <div>
          <ul>
            {this.props.history.map(h => {
              return <li key={h.id} className="historyItem">
                <div>{h.age} |id: {h.id}
                  <button onClick={() => this.props.onDelItem(h.id)}
                    style={{
                      marginLeft: "2rem",
                      background: "#FFFF33",
                      borderWidth: "0px",
                      borderRadius: "10px",
                      padding: "10px 25px",
                      color: "white"
                    }}>Delete</button>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(ageUp()),
    onAgeDown: () => dispatch(ageDown()),
    onDelItem: (id) => dispatch(itemDel(id))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
