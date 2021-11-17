import React  from 'react';
import {
  BrowserRouter as Router,
  Link,
  useParams,
  useLocation
} from "react-router-dom";

export default function Contact(props) {
 console.log(props,useParams())   
  
  return (
        <div>
      <main style={{ padding: "1rem 0" }}>
        <h2>Contact</h2>
      </main></div>
    );

}