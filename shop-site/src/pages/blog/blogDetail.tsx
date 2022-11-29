import React, { Fragment } from 'react'
import NavComponent from '../../components/main/navComponent'
import img1 from '../../assets/img/blog/details/details-pic.jpg';
import img2 from '../../assets/img/blog/details/details-author.jpg';
import BlogSidebar from '../../components/blog/blogSidebar';
import RecomendRead from '../../components/blog/recomendRead';

const BlogDetail = () => {
  return (
    <Fragment>
      <NavComponent />

      <section className="blog-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 order-md-1 order-2">
              <BlogSidebar />
            </div>
            <div className="col-lg-8 col-md-7 order-md-1 order-1">
              <div className="blog__details__text">
                <img src={ img1 } alt="" />
                <h3>The corner window forms a place within a place that is a resting point within the large
                  space.</h3>
                <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                  dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
                  aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
                  sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                  Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                  Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
                  quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                  feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
              </div>
              <div className="blog__details__content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="blog__details__author">
                      <div className="blog__details__author__pic">
                        <img src={ img2 } alt="" />
                      </div>
                      <div className="blog__details__author__text">
                        <h6>Michael Scofield</h6>
                        <span>Admin</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog__details__widget">
                      <ul>
                        <li><span>Categories:</span> Food</li>
                        <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecomendRead />


    </Fragment>
  )
}

export default BlogDetail