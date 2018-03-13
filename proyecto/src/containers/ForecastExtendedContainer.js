import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  render(){
    return(
    this.props.city &&
              <ForecastExtended
              city={ this.props.city }>
              </ForecastExtended>
              
              )
  }
}
const mapStateToProps =({ city }) => (
  console.log (`este es el valor de mapStateToProps${city}`), { city }

  );

export default connect( mapStateToProps, null )(ForecastExtendedContainer)