import axios from 'axios';

export const fetchUser = () =>{
    return(dispatch)=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            return dispatch (insertPeople(res.data))
            
        })
    }
}

export const fetchAlbum = () => {
    return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(res => {
        console.log(res)
        return dispatch(insertAlbum(res.data1))
        })
    }
}

export const incrementAction = () => {
    return{
        type:'INCREMENT'
    }
}
export const decrementAction = () => {
    return {
        type:'DECREMENT'
    } 
}
export const insertPeople = (data) =>{
    return {
        type:'INSERT_PEOPLE',
        payload: data
    }
}
export const insertAlbum = (data1) =>{
    return{
        type:'ALBUM',
        balikan: data1
    }
}