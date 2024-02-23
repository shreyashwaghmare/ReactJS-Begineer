import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
class Home {
    constructor(name){
        this.owner = name;
    }

    getOwnerName(){
        return 'MY house owner is'  + this.owner ;
    }
}

class Colony extends Home {
    constructor(name,colony){
        super(name);
        this.colony = colony;
    }

    getColonyName(){
        return  this.getOwnerName() +" "+ this.colony
    }
}
//const myHome = new Home("Shreyash");
const myColony = new Colony("Shreyash","Gulmohar");
const colonyName= myColony.getColonyName();
const firstElement = <h1>Hello Hydra!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
const array = [firstElement,myColony.colony,colonyName];
const array2 = array.map((item)=><h1>{item}</h1>)
root.render(array2);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
