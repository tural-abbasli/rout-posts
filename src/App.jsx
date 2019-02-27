import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Posts from './component/Posts';
import NewPost from './component/NewPost';
import PostDetail from './component/PostDetail';

const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/newpost" exact component={NewPost} />
                    <Route path="/post/:id" exact component={PostDetail} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;