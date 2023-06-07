import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function PostList({ posts, callback }) {
    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Список постов</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            callback={callback}
                            post={post}
                            id={index + 1}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default PostList;
