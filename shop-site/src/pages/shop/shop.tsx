import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import NavComponent from '../../components/main/navComponent'
import ListProduct from '../../components/shop/listProduct'
import SearchComponent from '../../components/shop/searchComponent'

const Shop = () => {
  return (
    <Fragment>
      <NavComponent />
      <div className='container mt-3'>
        <SearchComponent />
      </div>

      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul>
                    <li><Link to={'#'}>Fresh Meat</Link></li>
                    <li><Link to={'#'}>Vegetables</Link></li>
                    <li><Link to={'#'}>Fruit &amp; Nut Gifts</Link></li>
                    <li><Link to={'#'}>Fresh Berries</Link></li>
                    <li><Link to={'#'}>Ocean Foods</Link></li>
                    <li><Link to={'#'}>Butter &amp; Eggs</Link></li>
                    <li><Link to={'#'}>Fastfood</Link></li>
                    <li><Link to={'#'}>Fresh Onion</Link></li>
                    <li><Link to={'#'}>Papayaya &amp; Crisps</Link></li>
                    <li><Link to={'#'}>Oatmeal</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <ListProduct />
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default Shop