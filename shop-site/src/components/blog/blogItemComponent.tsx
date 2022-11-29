import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img/blog/blog-1.jpg';

const BlogItemComponent = () => {
  return (
    <div className="blog__item">
      <div className="blog__item__pic">
        <img src={ img } alt="" />
      </div>
      <div className="blog__item__text">
        <ul>
          <li><i className="fa-regular fa-calendar mr-2"></i>May 4,2019</li>
          <li><i className="fa-regular fa-comment"></i> 5</li>
        </ul>
        <h5><Link to={'/blog/detail'}>Cooking tips make cooking simple</Link></h5>
        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
      </div>
    </div>
  )
}

export default BlogItemComponent