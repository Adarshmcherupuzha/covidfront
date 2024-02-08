import React from 'react'
import Nav1 from './Nav1'

const Search = () => {
  return (
    <div>
        <Nav1/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                    Name
                </label>
                <input type="text" className="form-control" />
                <br/>
                <button className="btn btn-success">Search</button>
                
            


            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                    Phone
                </label>

                <input type="text" className="form-control" />
                <br/>
                <button className="btn btn-success">Search</button>


</div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                    Address
                </label>
                <input type="text" className="form-control" />
                <br/>
                <button className="btn btn-success">Search</button>

</div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                    Symptom
                </label>
                <input type="text" className="form-control" />
                <br/>
                <button className="btn btn-success">Search</button>

</div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                
            <label htmlFor="" className="form-label">
                    Status
                </label>
                 <input type="text" className="form-control" />
                 <br/>
                <button className="btn btn-success">Search</button>


            </div>
        </div>



                </div>
            </div>
        </div>

        





    </div>
  )
}

export default Search