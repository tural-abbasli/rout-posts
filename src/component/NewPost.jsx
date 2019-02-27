import React, { Component } from 'react';
import { connect } from 'react-redux';

import { pushPost } from '../actions/index';

class NewPost extends Component{
    state = {
        title:'',
        body:''
    }

    onForumSubmit = (event) =>{
        event.preventDefault();
        this.props.history.push('/');
        this.props.pushPost(this.state);
    }
    render(){
        return (
            <form onSubmit={this.onForumSubmit} className="ui form" style={{marginTop:'20px'}}>
                <div className="field">
                    <label>Post title</label>
                    <input 
                        type="text" 
                        name="post-title" 
                        placeholder="Title"
                        value={this.state.title}
                        onChange={(e)=> this.setState({title:e.target.value})}
                        required
                        />
                </div>
                <div className="field">
                    <label>Post body</label>
                    <textarea 
                        placeholder="Body"
                        value={this.state.body}
                        onChange={(e)=> this.setState({body:e.target.value})}
                        required
                    />
                </div>
                <button type="submit" className="ui primary button" disabled={
                    !(this.state.title.length>2 && this.state.body.length>139)
                }>Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state =>{
    return{
        pushedData:state.push
    }
}

export default connect(mapStateToProps,{pushPost})(NewPost);   