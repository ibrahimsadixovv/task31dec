import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav>

<div className='NavigationBar'>
   

    <div className='Logo'>

        <p>Start Bootstrap</p>

    </div>
    <div className='icon'> <i class="fa-solid fa-bars"></i></div>

    <div className='Navigation'>

        <ul>

        <li >
<Link to="Home" class="link" href="#">Home</Link>
</li>
<li>
<Link to="About" class="link" href="#">About</Link>
</li>

<li >
<Link to="Contact" class="link" href="#">Contact</Link>
</li>
<li >
<Link to="Pricing" class="link" href="#">Pricing</Link>
</li>       
<li >
<Link to="FAQ" class="link" href="#">FAQ</Link>
</li>
<li >
<Link to="Blog" class="link" href="#">Blog</Link>
</li>
<li >
<Link to="Portfolio" class="link" href="#">Portfolio</Link>
</li>

        </ul>

    </div>
</div>

</nav>
    </div>
  )
}

export default Navbar