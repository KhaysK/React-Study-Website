import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom';

function PostItem(props) {
    const router = useNavigate(); 
    return (
        <div className="post">
            <div>
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div style={{width: '90%'}}>{props.post.body}</div>
            </div>
            <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                Open
            </MyButton>
            <MyButton onClick={() => props.callback(props.post)}>
                Delete
            </MyButton>
        </div>
    );
}
export default PostItem;
