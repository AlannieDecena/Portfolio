import React from 'react'
import { Link } from 'react-router-dom'

export default function AnimeHome() {
  return (
    <div className='animeBody'>

<div className="gridBg"></div>

<div className="boxinside">
<Link to="/animeloading">
<div className="door">  
    <div className="doorknob"></div>
</div>
</Link>  
 
</div>
<footer className="fixed-bottom"></footer>
    </div>
  )
}
