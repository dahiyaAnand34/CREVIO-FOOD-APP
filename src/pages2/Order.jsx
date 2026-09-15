import './Order.css';
import { useEffect, useState } from 'react';

function Order(){

const[name,setName] = useState('');
const[num,setNum] = useState('');
const[flat,setFlat] = useState('');
const[city,setCity] = useState('');

  useEffect(()=>{
    alert("Only case on delevery avelavel")
  })
  
  function PayOrder(){
if(name == "" || num == "" || flat == "" || city == ""){
  alert("Fill the form first");
}
else{
  alert("Done Your Order");
}
  }

    return(
        <>

       <div className="order-main">

        <div className="order-form">
 <form>
          <input type="text" 
          placeholder='Enter your full name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />

          <input type="number"
          placeholder='Enter your number'
          value={num}
          onChange={(e)=>setNum(e.target.value)}
          />

          <input type="text"
          placeholder='Flat / House number'
          value={flat}
          onChange={(e)=>setFlat(e.target.value)}
          />
          <span>Enter date and time</span>
<input type="datetime-local"
placeholder='Enter Date or time'
/>
          <select className="select"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          >
            <option>ARIA</option>
            <option>MADHAVGHARH</option>
            <option>SATNA</option>
            <option>CURCUIT HOUSE</option>
            <option>SINDHI CAMP</option>
            <option>MATHURA BASTI</option>
          </select>

<button id='order-food' onClick={PayOrder}>ORDER</button>
</form>
        </div>

        <div className="order-show">

        </div>
       </div>
        </>
    )
}
export default Order;