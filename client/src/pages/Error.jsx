import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <>
     <section id="error-page">
        <div className="content">
            <h2 className='header'> 404 </h2>
            <h4>Sorry! Page not found</h4>
            <p>It looks like you're lost. The page you are looking for has moved or is not availabel. If you believe there's an issue, feel free to report it , and we'll look into it. 
            </p>
            <div className="btns">
                <NavLink to='/'> Return home</NavLink>
                <NavLink to='/contact'> Report problem</NavLink>
            </div>
        </div>
        </section>
    </>
  );
};

export default Error
