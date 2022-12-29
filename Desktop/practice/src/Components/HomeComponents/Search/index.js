import React from 'react'
import "./style.css"
function Search() {
  return (
    <div className='search'>  
    <div className='searchArea'>
      
    
    <div className='searchText'>
<h5>New products, delivered to you.
</h5>
<p>Sign up for our newsletter for the latest updates.</p>
    </div>

    <div className='searchBox'>
<div className='mainSearch'>
<input placeholder='Email adress..'></input> 
<button>Sign Up</button>
</div>

<div className='searchBoxText'>
<p>We care about privacy, and will never share your data.</p>
</div>

    </div>

    </div>
    </div>

  )
}

export default Search