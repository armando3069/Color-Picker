import React,{useState} from 'react';
import './color.css';
import img from  './rgb.png';

export default function Color() {


      const [red, setRed] = useState(0);
      const [green, setGreen] = useState(0);
      const [blue, setBlue] = useState(0);
  ///rgb(red, green, blue
     // const Bg ={BackgroundColor : `${red}`};

     let style = {
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      };
      document.body.style.backgroundColor =  `rgb(${red}, ${green}, ${blue})`;

      function PickerRed(event)
      {
       const newVal = event.target.value;
       setRed(newVal);
      }

      function PickerGreen(event)
      {
       const newVal = event.target.value;
       setGreen(newVal);
      }
      function PickerBlue(event)
      {
       const newVal = event.target.value;
       setBlue(newVal);
      }

    return (
        
    
        <div className='app'> 
            
          
                   <img src={img} width='300px' height="300px" />
               
               <h1>rgb({red},{green},{blue})</h1>
               <br/>
               <div className='contar' >
                  <div className="b">R</div> <input type="range" onChange={PickerRed}  min="0" max="255" step="1" id="rgb"/>  
                  <div className="b">G</div> <input type="range" onChange={PickerGreen}  min="0" max="255" step="1" id="rgb"/>  
                  <div className="b">B</div> <input type="range"onChange={PickerBlue}  min="0" max="255" step="1" id="rgb"/>    
                 </div>
        </div>
    )
}
