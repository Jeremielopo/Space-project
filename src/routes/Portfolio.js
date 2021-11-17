import React  from 'react';
import {
  useParams,
} from "react-router-dom";
export default function Portfolio() {
    let {id} = useParams();
    console.log(useParams(), {id} );
    return  <div> Portfolio id is: {id}</div>;
    
  }