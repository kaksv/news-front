import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Container from 'react-bootstrap/esm/Container';
import httpClient from '../http/httpClient';
import { MdEdit } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function DetailPost() {
    const param = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await httpClient.get(`/api/posts/${param.id}`);
                console.log(data);
                setPost(data);
            }catch(error) {
                console.error(error);
            }
        }

        fetchData();
    }, [param]);

    const onDelete = async() => {
        try {
            await httpClient.delete(`/api/posts/${param.id}`);
            navigate('/');
        }catch(error) {
            console.error(error);
        }
    }
  return (
   <>
   <Container>
    <h1>{post?.title}</h1>
    <p className='edit-btn' onClick={() => navigate(`/posts/${param.id}/update`)}> <MdEdit />Edit</p>
    <p className='edit-btn' onClick={onDelete}> <FaDeleteLeft />Delete</p>
    <h4>{post?.summary}</h4>
    <img src={post?.cover} alt={post?.title} />
    <p>{post?.content}</p>
   </Container>
   </>
  )
}

export default DetailPost;