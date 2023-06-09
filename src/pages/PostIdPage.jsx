import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../component/UI/Loader/Loader";

function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchById(params.id);
        fetchComments(params.id);
    }, []);
    
    return (
        <div>
            <h1>You opened Page of post with ID = {params.id}</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {post.id}. {post.title}
                </div>
            )}
            <h1>Comments:</h1>
            {isComLoading 
                ? <Loader />
                : <div>
                    {comments.map(comment => 
                        <div key={comment.id} style={{marginTop:'16px'}}>
                            <h5>{comment.email}</h5>   
                            <div>{comment.body}</div> 
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default PostIdPage;
