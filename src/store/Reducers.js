const myData={
    counter : 0,
    // title:'kosong'
    people:[],
    album:[]
}

const myReducers = (state={...myData},action)=>{
// ... itu spread untuk mengcopy data yang ada dalam obj
    switch(action.type){
        case 'INCREMENT':
        return ({
            ...state,
            counter:state.counter+1
        });
        case 'DECREMENT':
        return({
            ...state,
            counter:state.counter-1
        });
        case 'INSERT_PEOPLE':
        return({
            ...state,
            people: action.payload
        });
        case 'ALBUM':
        return ({
            ...state,
            album: action.balikan
        });
        default:
        return state
    }
}

export default myReducers