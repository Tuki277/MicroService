import React from 'react'
import { Link } from 'react-router-dom'
import BlogSidebarRecent from './blogSidebarRecent'

const BlogSidebar = () => {
    return (
        <div className="blog__sidebar">
            <div className="blog__sidebar__search">
                <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><span className="icon_search" /></button>
                </form>
            </div>
            <div className="blog__sidebar__item">
                <h4>Categories</h4>
                <ul>
                    <li><Link to={'#'}>All</Link></li>
                    <li><Link to={'#'}>Beauty (20)</Link></li>
                    <li><Link to={'#'}>Food (5)</Link></li>
                    <li><Link to={'#'}>Life Style (9)</Link></li>
                    <li><Link to={'#'}>Travel (10)</Link></li>
                </ul>
            </div>
            <div className="blog__sidebar__item">
                <h4>Recent News</h4>
                <div className="blog__sidebar__recent">
                    <BlogSidebarRecent />
                    <BlogSidebarRecent />
                    <BlogSidebarRecent />
                    <BlogSidebarRecent />
                </div>
            </div>
            <div className="blog__sidebar__item">
                <h4>Search By</h4>
                <div className="blog__sidebar__item__tags">
                    <Link to={'#'}>Apple</Link>
                    <Link to={'#'}>Beauty</Link>
                    <Link to={'#'}>Vegetables</Link>
                    <Link to={'#'}>Fruit</Link>
                    <Link to={'#'}>Healthy Food</Link>
                    <Link to={'#'}>Lifestyle</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar