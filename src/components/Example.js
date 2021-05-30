import React from "react";


export default function Example() {


        function clickHadler(){    
            
            //вместо этой ссылки потавить свой адрес
          fetch('http://192.168.10.10/api/test')
          .then((response) => response.json())
          .then((findresponse)=> {
           console.log(findresponse)
        })
      
      
      if(Response.status === 200){
        return (
          <ul>{this.state.data.map(item => <li>{item.title}</li>)} </ul>
        )
      
      }
      }
            
        return (
          <div className="Сonteiner">
         <h1>Пример</h1>
          <button onClick= {clickHadler}>жми</button>
          </div>
      
      
      
        );
      }