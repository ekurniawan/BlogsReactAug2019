export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_USER':
            //menambahkan record
            return [...state,action.payload];
            //return action.payload;
        default:
            return state;
    }
};