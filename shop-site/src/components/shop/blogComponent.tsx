import React from 'react'
import BlogItemComponent from '../blog/blogItemComponent'

const BlogComponent = () => {
    return (
        <section className="from-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title from-blog__title">
                            <h2>From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <BlogItemComponent />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <BlogItemComponent />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <BlogItemComponent />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BlogComponent