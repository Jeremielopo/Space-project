import React from 'react';
import{ BrowserRouter, Route , Routes } from 'react-router-dom';
import Header from '../component/Header';
import MobileHeader from '../component/Mobile-Header';
import Technology from "./Technology";
import Destination from "./Destination";
import NotFound from './404';
import Home from "./Home";
import Crew from './Crew'
import HeaderTablet from '../component/HeaderTablet';


const App  = () =>  

(
    <BrowserRouter>
          
          <Header  />
          <HeaderTablet />
          <MobileHeader />
          <Routes>         
          <Route exact path="/"  element = { <Home />  } /> 
          <Route path= 'Technology/*'  element = { <Technology />  }  />
          <Route path= 'Crew/*'  element = { <Crew />  }  />
          <Route path="Destination/*"  element = { <Destination />  } />
          <Route path='*'  element= {<NotFound />   }    />
        </Routes>
         
       </BrowserRouter>
    );
    
export default App ;   