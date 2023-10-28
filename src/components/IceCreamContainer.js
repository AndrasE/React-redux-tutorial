import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecream - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>buy icecream</button>
    </div>
  );
}


const MapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(MapStateToProps, mapDispathToProps)(IceCreamContainer);
