import Container from "react-bootstrap/esm/Container";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import httpClient from "../http/httpClient";
import PostForm from "../components/PostForm";
function Home() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const {data} = await httpClient.get('/api/posts');
                // console.log(response);
                // const data = await response.json();
                // console.log(data);
                setPosts(data);
            }catch(error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, []);
    return (
        <div>
            {/* <PostForm /> */}
            <Container>
                {posts && posts.length > 0 && posts.map(post => {
                    return (
                        <Post
                        key={post._id}
                        id={post._id}
                        title={post.title}
                        summary={post.summary}
                        cover={post.cover}
                        createdAt={new Date(post.createdAt).toDateString()}
                        />
                    )
                })}
                {/* <Post
                title="My first post"
                summary="This is the summary"
                cover="https://res.cloudinary.com/dagn33ye3/image/upload/v1741972404/mern_blog/cizok8fxxlkewvszjf3m.jpg"
                createdAt={new Date().toDateString()}
                /> */}
            </Container>
        </div>
    );
}

export default Home;