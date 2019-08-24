import axios from "../apis/jsonPlaceholder";
import _ from 'lodash';

export const fetchPostsAndUsers = ()=>async (dispatch,getState)=>{
    //console.log('About to fetch post');
    await dispatch(fetchPosts());
    //cari unique userId
    const userIds = _.uniq(_.map(getState().posts,'userId'));
    
    //get dari server user yg userIdnya diinginkan
    userIds.forEach(id=>dispatch(fetchUsers(id)));
};


export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get('/posts');
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    });
};

export const fetchUsers = (id) => async (dispatch) => {
    const response = await axios.get(`/users/${id}`);
    dispatch({ 
        type: 'FETCH_USER',
        payload:response.data 
    });
}
