import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Post({id, title, summary, cover, createdAt}) {
  const navigate = useNavigate();
  return (
    <div className='post-item' onClick={() => navigate(`/posts/${id}`)}>
        <div className='row'>
            <div className='col-5'>
            <img src={cover} alt='title' />
            </div>
            <div className='col-7 d-flex flex-column py-2'>
            <p>{createdAt}</p>
            <h2 className='title'>{title}</h2>
            <p className='summary'>{summary}</p>
            <NavLink to={`/posts/${id}`} className='read-more'>Read more <FaAngleDoubleRight /></NavLink>
               
            </div>
        </div>
        {/* <div className='col-5'>
            <button className='btn btn-primary'>Edit</button>
            <button className='btn btn-danger'>Delete</button>
        </div> */}
    </div>
  )
}

export default Post;