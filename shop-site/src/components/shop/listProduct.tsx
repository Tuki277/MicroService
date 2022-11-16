import React from 'react'
import { Link } from 'react-router-dom'
import ItemComponent from './itemComponent'

const ListProduct = () => {
  return (
    <div className="col-lg-9 col-md-7">
      <div className="filter__item">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="filter__sort">
              <span>Sort By</span>
              <select>
                <option value={0}>Default</option>
                <option value={0}>Default</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="filter__found">
              <h6><span>16</span> Products found</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-3">
            <div className="filter__option">
              <span className="icon_grid-2x2" />
              <span className="icon_ul" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <ItemComponent />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <ItemComponent />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <ItemComponent />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <ItemComponent />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <ItemComponent />
        </div>
        
      </div>
      <div className="product__pagination">
        <Link to={'#'}>1</Link>
        <Link to={'#'}>2</Link>
        <Link to={'#'}>3</Link>
        <Link to={'#'}><i className="fa fa-long-arrow-right" /></Link>
      </div>
    </div>
  )
}

export default ListProduct