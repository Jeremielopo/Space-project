import React from 'react';
import{ BrowserRouter, Route , Routes } from 'react-router-dom';
import Header from './Header';
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import NotFound from './404';
import Home from "./Home";



const App  = () =>  (


    <BrowserRouter>
          <div>
          <Header  />
          <Routes>
          
          <Route exact path="/"  element = { <Home />  } /> 
          <Route path= 'Portfolio'  element = { <Portfolio />  }  />
          <Route path= 'Portfolio/:id'  element = { <Portfolio />  }  />
          


          <Route path="Contact/*"  element = { <Contact />  } />
       
  
  
          <Route path='*'  element= {<NotFound />   }      />
  
        </Routes>
          </div>
        
         
       </BrowserRouter>
  
  
    );
export default App ;   