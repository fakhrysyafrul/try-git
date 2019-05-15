import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementAction, decrementAction, fetchUser, fetchAlbum} from './Action'


class Home extends Component{
    increment =()=>{
        this.props.incrementAction()
        console.log(this.props)
    }
     insert =() => {
         this.props.fetchUser()
         console.log("asdf")
     }
    
    decrement =()=>{
        this.props.decrementAction()
        console.log(this.props)
    }
    album = () => {
        this.props.fetchAlbum()
        console.log("masuk")
    }
    render(){
        return(
    <div>    
        <h2>{this.props.angka}</h2>    
        <button onClick={this.increment}>increment</button>    
        <button onClick={this.decrement}>decrement</button>  
        <button onClick={this.insert}>insert</button>
        {/* <h2></h2> */}
        <button onClick={this.album}>album</button>
    </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        angka:state.counter
    }
}
const mapDispatchToProps = {incrementAction,decrementAction,fetchUser,fetchAlbum}

export default connect(mapStateToProps,mapDispatchToProps)(Home);