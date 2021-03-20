import { useEffect, useState } from "react";
import PostListFeatures from "./features/PostList";
import PostList from "./features/PostList/components";
import TodoFeature from "./features/Todo";

function App() {
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
    <div className="App">
      <PostList posts = {postList}></PostList>

    </div>
  );
}

export default App;
