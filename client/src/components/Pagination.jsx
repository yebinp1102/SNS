import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Pagination, PaginationItem } from '@material-ui/lab'

const Paginate = () => {
  return (
    <Pagination
      className='sub-bg-color-light mg-updown-2 border pd-1 box-shadow-deep center'
      count={5} 
      page={1} 
      color='secondary'
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    />
  )
}

export default Paginate
