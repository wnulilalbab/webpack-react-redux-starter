import React from "react";
import {connect} from "react-redux";

import Main from "../components/Main";
import User from "../components/User";

import * as userAction from "../actions/userAction";
import * as mathAction from "../actions/mathAction";

//static
import MATH_REDUCER_ACTION from '../actions/constants/mathActionType';
import USER_REDUCER_ACTION from '../actions/constants/userActionType';

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Wahyu")} />
                <User username={this.props.user.name} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(userAction.setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
