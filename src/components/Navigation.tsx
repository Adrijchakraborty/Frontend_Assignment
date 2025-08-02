import React from 'react'
import { Link } from "react-router-dom"

const Navigation: React.FC = () => {
    return (
        <div className='flex gap-4'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    )
}

export default Navigation