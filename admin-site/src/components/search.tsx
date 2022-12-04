import { Input } from 'antd'
import React, { Fragment } from 'react'

const Search = () => {
    return (
        <Fragment>
            <Input.Group compact>
                <Input.Search allowClear style={{ width: '100%' }} placeholder="Search here"/>
            </Input.Group>
        </Fragment>
    )
}

export default Search