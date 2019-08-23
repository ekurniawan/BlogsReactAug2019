import axios from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get('/posts');
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    });
};
