import React, { useState } from 'react'
import Nav1 from './Nav1'
import axios from 'axios';

const Add3 = () => {

    const [input, setInput] = new useState({
        "name":"",
        "phone":"",
        "adress":"",
        "symptom":"",
        "status":""
      });
    
      const inputHandler=(event)=>{
            setInput({...input,[event.target.name]:event.target.value })
    
    
    
    
      }
      const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/covid/entry",input).then(
          (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
              alert("Inserted Successfully")
              setInput( {
                "name":"",
                "phone":"",
                "adress":"",
                "symptom":"",
                "status":""
              })
              
            } else {
              alert("something went wrong")
              
            }
          }
        )
      }
    















  return (
    <div>
        <Nav1/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                    Name
                </label>
                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>


            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                    Phone
                </label>

                <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler}/>


</div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                    Address
                </label>
                <input type="text" className="form-control" name="adress" value={input.adress} onChange={inputHandler}/>

</div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                    Symptom
                </label>
                <input type="text" className="form-control" name="symptom" value={input.symptom} onChange={inputHandler}/>

</div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                
            <label htmlFor="" className="form-label">
                    Status
                </label>
                 <input type="text" className="form-control" name="status" value={input.status} onChange={inputHandler} />


            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValues}>ADD</button>
                
            </div>
        </div>



                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Add3