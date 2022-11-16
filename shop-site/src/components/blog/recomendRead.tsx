import React from 'react'
import BlogItemComponent from './blogItemComponent'

const RecomendRead = () => {
    return (
        <section className="related-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title related-blog-title">
                            <h2>Post You May Like</h2>
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

export default RecomendRead