import React, { useEffect, useState } from "react";
import Nav1 from "./Nav1";
import axios from "axios";

const Search = () => {
  const [input, setInput] = new useState({
    "name": "",
    "phone": ""

  });

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const [data,setdata]=new useState([])
  const readValues = () => {
    console.log(input);
    axios.post("http://localhost:3001/api/covid/search", input).then((response) => {
      setdata(response.data);
        
  }  ) 

 
}

useEffect(()=>{readValues()},[])

  return (
    <div>
      <Nav1 />
      <div className="container">
        <div className="row ">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Phone
                </label>
                <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary" onClick={readValues}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>




      
      <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Symptom</th>
      <th scope="col">Status</th>
      
    </tr>
  </thead>
  <tbody>
  {
    data.map(
      (value,index)=>{
        return <tr>
          <th scope="row">{index+1}</th>
          <td>{value.name}</td>
          <td>{value.phone}</td>
          <td>{value.adress}</td>
          <td>{value.symptom}</td>
          <td>{value.status}</td>
        </tr>
      }
    )
  }
  

  </tbody>
</table>
                </div>
            </div>
        </div>










    </div>
  );
};

export default Search;
