import React from 'react'
import Nav1 from './Nav1'

const Add3 = () => {
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
                <input type="text" className="form-control" />


            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                    Phone
                </label>

                <input type="text" className="form-control" />


</div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                    Address
                </label>
                <input type="text" className="form-control" />

</div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                    Symptom
                </label>
                <input type="text" className="form-control" />

</div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                
            <label htmlFor="" className="form-label">
                    Status
                </label>
                 <input type="text" className="form-control" />


            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">ADD</button>
                
            </div>
        </div>



                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Add3