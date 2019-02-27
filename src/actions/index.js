import jsonholder from '../apis/jsonholder';


export const fetchPosts = () => async dispatch => {
    const response = await jsonholder.get('/posts');
    dispatch({type:'FETCH_POSTS',payload:response.data});
};

export const fetchPost = (id) => async dispatch =>{
    const response = await jsonholder.get('/posts/' + id);
    dispatch({type:'FETCH_POST',payload:response.data});
}

export const pushPost = (data) => async dispatch =>{
    const response = await jsonholder.post('/posts/',data);
    dispatch({type:'PUSH_POST',payload:response.data});
}