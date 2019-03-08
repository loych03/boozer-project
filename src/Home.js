import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props)=>
<div >
  <h1 className="home">Welcome</h1>
  <ul className="navlink">
    <li><Link to='/cocktails'>Cocktails</Link></li>
    </ul>
  </div>

export default Home
