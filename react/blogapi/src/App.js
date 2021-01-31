import React, { useEffect, useState } from 'react';
import Posts from './components/stories';
import PostLoadingComponent from './components/postLoading';
import axiosInstance from './axios';
function App() {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: true,
        posts: null,
    });
    useEffect(() => {
        axiosInstance.get().then((res) => {
            const allPosts = res.data;
            setAppState({ loading: false, posts: allPosts });
            console.log(res.data);
        });
    }, [setAppState]);
    return (
        <div className="App">
           
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    );
}
export default App;