import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  for (let index = 0; index < pronoun.length; index++) {
  for (let second = 0; second < adj.length; second++) {
  for (let third = 0; third < noun.length; third++) {
    
    const dominio = pronoun[index] + adj[second] + noun[third] + ".com";
    
    console.log(dominio);
     
    document.body.innerHTML += dominio + "<br>";
    
    
  } 
    
  }
  }


};


// forEach
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  pronoun.forEach(index => {
   adj.forEach(second => {
    noun.forEach(third => {
      console.log(index + second + third + ".com");
      
  
  })
  })
  })

