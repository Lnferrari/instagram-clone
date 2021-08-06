import React, {useState} from 'react'
import {GoVerified} from 'react-icons/go'
import {FaUser} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
import {BsThreeDots} from 'react-icons/bs'

const User = () => {
    const [isFollowing, setIsFollowing] = useState(true)

    const handleFollowingUser = () => setIsFollowing(!isFollowing)

    return (
        <div className='User'>
            <div className='avatar'>
                <img src={`${process.env.PUBLIC_URL}/images/avatar.jpeg`} alt="user avatar" />
            </div>
            <div className='user-info'>
                <div className='user-buttons'>
                    <div>
                        <h2>leomessi</h2>
                        <GoVerified style={{color: '#0095f6'}} />
                    </div>
                    <div className="buttons">
                        <button className='follow' onClick={handleFollowingUser}>{isFollowing ? 'Following' : 'Follow'}</button>
                        <button><IoIosArrowDown /></button>
                        <BsThreeDots style={{'margin-left': '8px'}} size={20} />
                    </div>
                </div>
                <div className='user-data'>
                    <span><span className='bold'>752</span> posts</span>
                    <span><span className='bold'>242m</span> followers</span>
                    <span><span className='bold'>247</span> following</span>
                </div>
                <div className='user-bio'>
                    <h4>Leo Messi</h4>
                    <p>Bienvenido a la cuenta oficial de Leo Messi / Welcome to the official Leo Messi Instagram account<br></br>
                    <a href="https://messi.com/" target='_blank'>messi.com</a>
                    </p>
                </div>
            </div>
            <div className='stories'>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/afa.jpeg`} alt="messi" />
                    Seleccion
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/messi11.jpeg`} alt="messi" />
                    FCB
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/messi6.jpeg`} alt="messi" />
                    Familia
                </div>
            </div>
        </div>
    )
}

export default User
