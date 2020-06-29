import React, {useEffect} from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import lightTheme from './themes/lightTheme';
import Landing from './pages/Landing';
import { loadUser, refreshToken } from './redux/actions/authAction';
import axios from 'axios';
import { baseUrl } from './utils/config';
import jwt from 'jsonwebtoken';
axios.defaults.baseURL = baseUrl;

const  App =()=> {

    useEffect(() => {
      store.dispatch(loadUser());

      if(localStorage.token){
        const token = localStorage.token
      let TokenArray = token.split(" ");
      let docodeToken =jwt.decode(TokenArray[1])

        console.log(docodeToken)
        console.log('Browser Time ===', Date.now() / 1000);
        console.log('Token Time ===', docodeToken.exp);
          if(docodeToken){
          if (docodeToken.exp < Date.now() / 1000) {
            console.log('token expire')
          store.dispatch(refreshToken()); 
            }else{
              console.log('token not expire')
            }
      }
    }else{
      localStorage.clear();
    }
 
    

    }, []);
  return (
   <Provider store={store}>
   <ThemeProvider theme={lightTheme}>
     <Router>
     <Landing/>
     </Router>
   </ThemeProvider>
   </Provider>
  );
}

export default App;
