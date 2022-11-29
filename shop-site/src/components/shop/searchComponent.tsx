import React from 'react'

const SearchComponent = () => {
    return (
        <div className="hero__search">
            <div className="hero__search__form">
                <form action="#">
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">SEARCH</button>
                </form>
            </div>
        </div>
    )
}

export default SearchComponent