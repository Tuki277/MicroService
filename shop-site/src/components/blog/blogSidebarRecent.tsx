import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img/blog/sidebar/sr-1.jpg';

const BlogSidebarRecent = () => {
    return (
        <Link to={'#'} className="blog__sidebar__recent__item">
            <div className="blog__sidebar__recent__item__pic">
                <img src={ img } alt="" />
            </div>
            <div className="blog__sidebar__recent__item__text">
                <h6>09 Kinds Of Vegetables<br /> Protect The Liver</h6>
                <span>MAR 05, 2019</span>
            </div>
        </Link>
    )
}

export default BlogSidebarRecent;