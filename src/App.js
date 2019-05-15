import React,{Component} from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ResponsiveDrawer from './components/ResponsiveDrawer'
// import LongMenu from './components/LongMenu';
import { Provider } from "react-redux";
import  store  from "./store";
import Home from "./store/Home";
import GridImage from './components/GridImage';

class App extends Component{
  render(){
    
return (
   //  <React.Fragment>
      
   //    <NavBar/>
   //    {/* <ResponsiveDrawer/> */}
   //    {/* <Home/> */}
   //    <GridImage/>
   //    <Grid container direction="row">
   //      <Grid item>
   //         <Cards/>
   //      </Grid>
   //      <Grid item>
   //         <Cards/>
   //      </Grid>
   //      <Grid item>
   //         <Cards/>
   //      </Grid>
   //      <Grid item>
   //         <Cards/>
   //      </Grid>
   //      <Grid item>
   //         <Cards/>
   //      </Grid>
   //      <Grid item>
   //         <Cards/>
   //      </Grid>
   //      <Grid item>
   //         <Cards/>
   //      </Grid>
   //      <Grid item>
   //         <Cards/>
   //      </Grid>
   //    </Grid>
   //    {/* <LongMenu/> */}
   //  </React.Fragment>
            <Provider store={store}>        
               <Home />      
            </Provider>   
    );
  }
}

export default App;
