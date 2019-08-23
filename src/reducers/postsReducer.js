export default (state=[],action)=>{
    switch(action){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};