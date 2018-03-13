import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
//import {setCity} from './actions';
//import { store } from './store';
import './App.css';


const cities = [
    'Santiago,scl',
    'Buenos Aires,ar',
    'Bogotá,col',
    'Ciudad de México, mx',
    'Madrid,es',
    'Rio de Janeiro,br',
    'London,uk'
];


class App extends Component {

/* handlerSelectionLocationClick = city =>{
   console.log(`handlerSelectionLocationClick ${city}`);
this.setState({ city });

//const action = {type:'setState' , value:city} // hay que crearla afuera de la funcion para no tocar al componente
//store.dispatch(setCity(city));
 
 this .props.setCity(city);

 }
*/

render() {
 return (
   <MuiThemeProvider>
     <Grid>
       <Row>
     <Col xs={12}>
           <AppBar title='kety'></AppBar>
         </Col>
       </Row>
       <Row>
       <Col xs={12} md={6}>
         <LocationListContainer
          cities={cities}>
         </LocationListContainer>
       </Col>
       <Col xs={12} md={6}>
         <Paper zDepth={4}>
          <div className='detail'>
          <ForecastExtendedContainer>
          </ForecastExtendedContainer>
         </div>
         </Paper>
       </Col>
       </Row>
     </Grid>
   </MuiThemeProvider>
 );
}
}


export default App;