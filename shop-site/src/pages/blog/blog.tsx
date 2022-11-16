import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import BlogItemComponent from '../../components/blog/blogItemComponent'
import BlogSidebar from '../../components/blog/blogSidebar'
import NavComponent from '../../components/main/navComponent'

const Blog = () => {
  return (
    <Fragment>
      <NavComponent />

      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <BlogSidebar />
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <BlogItemComponent />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <BlogItemComponent />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <BlogItemComponent />
                </div>
                <div className="col-lg-12">
                  <div className="product__pagination blog__pagination">
                    <Link to={'#'}>1</Link>
                    <Link to={'#'}>2</Link>
                    <Link to={'#'}>3</Link>
                    <Link to={'#'}><i className="fa fa-long-arrow-right" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default Blog