import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../_actions/posts'

const Paginate = ({page}) => {
  const { numberOfPages } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  // 페이지에 변화가 있을 때 마다 getPost api를 호출.
  useEffect(()=>{
    if(page) dispatch(getPosts(page))
  },[page])
  
  return (
    <Pagination
      className='sub-bg-color-light mg-updown-2 border pd-1 box-shadow-deep center'
      count={numberOfPages} 
      page={Number(page) || 1} 
      color='secondary'
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
      )}
    />
  )
}

export default Paginate
