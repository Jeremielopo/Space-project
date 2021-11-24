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
          <Route path= '/Technology'  element = { <Technology />  }  >
          <Route path= '/Technology/Capsule'  element = { <Technology />  }  />
          <Route path= '/Technology/Spaceport'  element = { <Technology />  }  />
          <Route path= '/Technology/Vehicle'  element = { <Technology />  }  />
          
          </Route>
          
          
          <Route path= '/Crew'  element = { <Crew />  }  >
          <Route path= '/Crew/Engineer'  element = { <Crew />  } / >
          <Route path= '/Crew/Pilot'  element = { <Crew />  } / >
          <Route path= '/Crew/Specialist'  element = { <Crew />  } / >
          <Route path= '/Crew/Commander'  element = { <Crew />  } / >
  
          
          </Route >
          
          
          <Route path ='/Destination' element = {<Destination />} >

          <Route path="/Destination/mars"  element = { <Destination />  } />
          <Route path="/Destination/Moon"  element = { <Destination />  } />
          <Route path="/Destination/Europa"  element = { <Destination />  } />
          <Route path="/Destination/Titan"  element = { <Destination />  } />
          </Route>
         
          <Route path='*'  element= {<NotFound />   }    />
        </Routes>
         
       </BrowserRouter>
    );
    
export default App ;   