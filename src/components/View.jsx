import React, { useEffect, useState } from 'react'
import Nav1 from './Nav1'
import axios from 'axios'

const View = () => {
    const [data,setdata]=new useState([])
    const getdata=()=>{
      axios.get("http://localhost:3001/api/covid/view").then(
        (response)=>{setdata(response.data)}
      )
    
    }

    useEffect(()=>{getdata()},[])



  return (
    <div>
        <Nav1/>


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
  )
}

export default View