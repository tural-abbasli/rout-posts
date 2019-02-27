import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import Loading from './Loading';

class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderList(){
        return(
            <div>
                <div className="ui secondary pointing menu">
                    <button className="ui right labeled icon button right menu" style={{margin:'10px'}}>
                        <i className="right arrow icon"></i>
                        <Link to="/newpost" className="item">New Post</Link>
                    </button>
                </div>
                <table className="ui selectable inverted table">
                    <thead>
                        <tr>
                            <th>Post title</th>
                            <th>Post body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.posts.map(post => {
                                return(
                                    <tr key={post.id}>
                                        <td>
                                            <Link to={"/post/" + post.id} >{post.title}</Link>
                                        </td>
                                        <td>
                                            <Link to={"/post/" + post.id} >{post.body}</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
    render(){
        if(this.props.posts.length>0){
            return this.renderList()
        }

        return <Loading message="Loading ..."></Loading>;
    }
};

const mapStateToProps = state =>{
    return { posts: state.posts};
};

export default connect(mapStateToProps,{fetchPosts})(Posts);
