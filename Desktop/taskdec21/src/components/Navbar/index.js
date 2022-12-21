import React from 'react'
import "./style.scss"
function Navbar() {
    return (
        <nav>

            <div className='NavigationBar'>

                <div className='Logo'>

                    <h1>REPUBLIC OF GAMERS</h1>

                </div>

                <div className='Navigation'>

                    <ul>

                        <li> <a>PRODUCTS </a></li>
                        <li> <a> INNOVATIONS </a></li>
                        <li> <a> DOWNLOADS </a></li>
                        <li> <a> COMMUNITY </a></li>
                        <li> <a> WHAT'S HOT </a></li>
                        <li> <a> SUPPORT </a></li>

                    </ul>

                </div>

                <div className='search'>

                    <p>ASUS</p>
                    <p>SEARCH</p>
                    <p>PERSON</p>
                    


                </div>

            </div>

        </nav>
    )
}

export default Navbar