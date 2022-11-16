import React, { Fragment } from 'react'
import BannerComponent from '../../components/shop/bannerComponent'
import BlogComponent from '../../components/shop/blogComponent'
import CategoryComponent from '../../components/shop/category.component'
import FeatureComponent from '../../components/shop/featureComponent'

const Home = () => {
  return (
    <Fragment>
      <CategoryComponent />
      <FeatureComponent />
      <BannerComponent />
      <BlogComponent />
    </Fragment>
  )
}

export default Home