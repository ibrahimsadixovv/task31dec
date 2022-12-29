import React from 'react'
import "./style.css"
function Blog() {
  return (
    <div className='blog'>
      
     <div className='blogContainer'>

<div className='blogCard'>
<div className='blogCardPic'>
<h4> 600 x 350</h4>
</div>

<div className='blogDet'>

<button> News</button>

<h3>Blog Post title
</h3>

<p>
Some quick example text to build on the card title and make up the bulk of the card's content.

</p>

</div>
<div className='user'>
<figure></figure>
<div className='userDet'>
  <h5>Kelly Rowan</h5>
  <p>
  March 12, 2022 · 6 min read

  </p>
</div>
</div>
</div>


<div className='blogCard'>
<div className='blogCardPic'>
<h4> 600 x 350</h4>
</div>

<div className='blogDet'>

<button> Media</button>

<h3>Another blog post title
</h3>

<p>

This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>

</div>
<div className='user'>
<figure></figure>
<div className='userDet'>
  <h5>Kelly Rowan</h5>
  <p>
  March 12, 2022 · 6 min read

  </p>
</div>
</div>
</div>



<div className='blogCard'>
<div className='blogCardPic'>
<h4> 600 x 350</h4>
</div>

<div className='blogDet'>

<button> News</button>

<h3>The last blog post title is a little bit longer than the others
</h3>

<p>

Some more quick example text to build on the card title and make up the bulk of the card's content.
</p>

</div>

<div className='user'>
<figure></figure>
<div className='userDet'>
  <h5>Kelly Rowan</h5>
  <p>
  March 12, 2022 · 6 min read

  </p>
</div>
</div>
</div>


</div>




     </div>
  
  
      
  )
}

export default Blog