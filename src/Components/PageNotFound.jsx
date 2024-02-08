import React from 'react'
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="container text-center py-5 my-5 ">
      <h1>404</h1>
      <h3 className='py-2'>Page Not Found</h3>
      <Link to={"/"}><button className='btn btn-outline-dark py-2'> Go To Home Page</button></Link>
    </div>
  )
}
