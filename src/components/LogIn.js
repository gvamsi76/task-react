import React, { useState } from 'react'
import Group from '../assets/Group 18997.png'
import NoPath from '../assets/NoPath - Copy.png'
function LogIn() {
    const [values, setValues] = useState()

    const changeHandler=(e)=>{
        setValues(e.target.value)
        console.log(setValues)
    }
    return (
        <div className="container">
            <div className="row m-5 no-gutters shadow-lg">
                <div className="col-md-6 d-none d-md-block">
                    <img src={NoPath} className="img-fluid" style={{ height: "100%" }} />
                </div>
                <div className="col-md-6 bg-white p-5" style={{ height: '300%' }}>
                    <div className="form-style">
                        <form>
                            <div className="form-group pb-3">
                                <input type="email" placeholder="Email" className="form-control"
                                    id="exampleInputEmail1" onChange={changeHandler} />
                            </div>
                            <div className="form-group pb-3">
                                <input type="password" placeholder="Password" className="form-control"
                                    id="exampleInputPassword1" onChange={changeHandler} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">

                            </div>
                            <div className="pb-2">
                                <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2">Submit</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default LogIn