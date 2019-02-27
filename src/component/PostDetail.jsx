import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchPost} from '../actions/index';

class PostDetail extends Component{
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
    }
    render(){
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <button className="ui left labeled icon button" style={{margin:'10px'}}>
                        <i className="left arrow icon"></i>
                        <Link to="/" className="item">Go to All Posts</Link>
                    </button>
                </div>
                <form className="ui form">
                    <div className="field">
                        <label>Post title</label>
                        <input type="text" name="post-title" value={this.props.post.title} readOnly/>
                    </div>
                    <div className="field">
                        <label>Post body</label>
                        <textarea value={this.props.post.body} readOnly/>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{ post:state.post };
}

export default connect(mapStateToProps,{fetchPost})(PostDetail);