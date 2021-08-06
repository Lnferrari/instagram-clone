import React, {useState} from 'react'
import Data from './../data.json'
import { FaHeart, FaComment } from 'react-icons/fa'
import {ImFilm} from 'react-icons/im'
import {IoMdGrid} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'
import {BiUserPin} from 'react-icons/bi'

function Gallery() {
    const [hoveredPostId, setHoveredPostId] = useState()

    const formatNumber = num => {
        const million = 1000000
        if(num > 999 && num < million){
            return (num/1000).toFixed(0) + 'k';
        }else if(num > million){
            return (num/million).toFixed(0) + 'm';
        }else if(num < 900){
            return num;
        }
    }

    const handleMouseOver = e => {
        setHoveredPostId(Number(e.target.id))
    }

    const handleMouseOut = () => setHoveredPostId(null)


    const posts = Data.map(post => (
        <div key={post.id} className='Post'>
                {/* <div className='bg-img' style={{background: `center / contain no-repeat url('${process.env.PUBLIC_URL}/images/${post.url}')`}} > */}
                    <img src={`${process.env.PUBLIC_URL}/images/${post.url}`} alt={post.title} id={post.id} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                    {
                        hoveredPostId === post.id ?
                        (<div className='info-post'>
                            <div className='likes'>
                                <FaHeart /> {formatNumber(post.likes)}
                            </div>
                            <div className='comments'>
                                <FaComment /> {formatNumber(post.comments)}
                            </div>
                        </div>) : null
                    }
                {/* </div> */}
        </div>
    ))

    return (
        <div className="Gallery">
            <div className='sections'>
                <div>
                    <IoMdGrid size={15} />
                    <span>POSTS</span>
                </div>
                <div>
                    <ImFilm size={15} />
                    <span>REELS</span>
                </div>
                <div>
                    <FiInstagram size={15} />
                    <span>IGTV</span>
                </div>
                <div>
                    <BiUserPin size={15} />
                    <span>TAGGED</span>
                </div>
            </div>
            <div className='posts-container'>{posts}</div>
        </div>
    )
}

export default Gallery

