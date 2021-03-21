import React, { useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import PostList from './components';
import queryString from 'query-string';
import Pagination from './Paginations/components';
import PostFilterForm from './components/PostListForm';

PostListFeatures.propTypes = {
    
};

function PostListFeatures(props) {
    const [postList,setPostList] = useState([]);
    const [filter,setFilter] = useState({
        _limit: 10,
        _page: 1,
        title_like : '',
    });
    const [pagination,setPagination] = useState({
        _page : 1,
        _limit : 10,
        _totalRows: 1,
    });
    function handlePageChange(newPage) {
        console.log(newPage);
        setFilter({
            ...filter,
            _page: newPage,
        })
    }


    useEffect(() => {
        async function fetchPostList() {
            // ...
            try {
                const paramString = queryString.stringify(filter);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({responseJSON});

                const {data,pagination} = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch(error) {
                console.log('fail',error.message);
            }
        }

        fetchPostList();
    },[filter]);

    function handleFilterChange(newFilter) {
        console.log('new filter',newFilter);
        setFilter({
            ...filter,
            _page: 1,
            title_like: newFilter.searchTerm,
        });
    }

    return (
        <div>
            <PostFilterForm onSubmit= {handleFilterChange} ></PostFilterForm>
            <PostList posts = {postList}></PostList>
            <Pagination
                pagination = {pagination}
                onPageChange = {handlePageChange}
            ></Pagination>
        </div>
    );
}

export default PostListFeatures;