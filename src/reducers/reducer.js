export const postsReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        case 'PUSH_POST':
            return [action.payload,...state]
        default:
            return state;
    }
};

export const postReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_POST':
            return action.payload;
        default:
            return state; 
    }
};
