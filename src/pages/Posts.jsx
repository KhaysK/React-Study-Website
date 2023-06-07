import React, { useEffect, useRef, useState } from "react";
import PostList from "../component/PostList";
import "../styles/App.css";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import MyButton from "../component/UI/button/MyButton";
import MyModal from "../component/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../component/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../component/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../component/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [visible, setVisible] = useState(false);
    const [totalPage, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElem = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(
        async (limit, page) => {
            const response = await PostService.getAll(limit, page);
            setPosts([...posts, ...response.data]);
            const totalCount = response.headers["x-total-count"];
            setTotalPages(getPageCount(totalCount, limit));
        }
    );

    useObserver(lastElem, page < totalPage, isPostsLoading, () =>
        setPage(page + 1)
    );

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    const addPost = (post) => {
        setPosts([...posts, post]);
        setVisible(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((item) => item.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className="App">
            <MyButton
                style={{ marginTop: "20px" }}
                onClick={() => setVisible(true)}
            >
                Add Post
            </MyButton>
            <MyModal active={visible} setActive={setVisible}>
                <PostForm callback={addPost} />
            </MyModal>
            <hr style={{ margin: "15px 0" }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Number of elements"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Show All'},
                ]}
            />
            {postError && <h1>Error occurred: {postError}</h1>}
            <PostList callback={removePost} posts={sortedAndSearchedPosts} />
            {isPostsLoading && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}
                >
                    <Loader />
                </div>
            )}
            <div ref={lastElem}></div>
            <Pagination
                page={page}
                totalPage={totalPage}
                changePage={changePage}
            />
        </div>
    );
}

export default Posts;
