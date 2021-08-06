import React, {useState} from 'react';
import {CgHome} from 'react-icons/cg';
import {IoPaperPlaneOutline, IoSearch} from 'react-icons/io5';
import {CgAddR} from 'react-icons/cg'
import {ImCompass2} from 'react-icons/im';
import {FaRegHeart} from 'react-icons/fa';

function NavigationBar() {
    // placeholder='&#xF002; Search'
    const [searchInput, setSearchInput] = useState()

    return (
        <div className='Header'>
            <nav>
                <div className="logo">
                    <img src={`${process.env.PUBLIC_URL}/instaLogo.png`} />
                </div>
                <div className='search'>
                    <input type="search" placeholder='&#xe8b6;Search' />
                </div>
                <div className='icons'>
                    <CgHome />
                    <IoPaperPlaneOutline />
                    <CgAddR />
                    <ImCompass2 />
                    <FaRegHeart />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.jpeg`} />
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
