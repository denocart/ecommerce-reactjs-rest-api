import React from 'react';
import './App.css';
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import lightTheme from './themes/lightTheme';



const  App =()=> {

  return (
   <Provider store={store}>
   <ThemeProvider theme={lightTheme}>
     <Router>

     </Router>
   </ThemeProvider>
   </Provider>
  );
}

export default App;
