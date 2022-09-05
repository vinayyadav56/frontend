import React from 'react'
import { Link } from 'react-router-dom'
import Frame from "../images/Frame.png";
import moblogo from "../images/moblogo.png";
const Sidebar = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link>
                <img src={Frame} className="desk_logo" alt="dashlogo"/>
                <img src={moblogo} className="mob_logo" alt="moblogo"/>
                </Link>
            </li>
            <li>
                <Link>
                </Link>
            </li>
            <li>
                <Link>
                </Link>
            </li>
            <li>
                <Link>
                </Link>
            </li>
            <li>
                <Link>
                </Link>
            </li>
            <li>
                <Link>
                </Link>
            </li>
            
        </ul>
    </nav>
    </>
  )
}

export default Sidebar