import React, { useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import PostList from './components';

PostListFeatures.propTypes = {
    
};

function PostListFeatures(props) {
    const [postList,setPostList] = useState([]);

    useEffect(() => {
        async function fetchPostList() {
            // ...
            const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
            const response = await fetch(requestUrl);
            const responseJSON = await response.json();
            console.log({responseJSON});

            const {data} = responseJSON;
            setPostList(data);
        }

        fetchPostList();
    },[]);

    return (
        <div>
            <PostList posts = {postList}></PostList>
        </div>
    );
}

export default PostListFeatures;