import React , { Component } from 'react';
import CardList from '../Components/CardList';
//import { friends } from './friends';
import Search from '../Components/Search';
import Scroll from '../Components/Scroll';

class App extends Component{
    constructor() {
        super()
        this.state = {  // search communication with App
            friends: [],
            searchfield:""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users') // make request
            .then(response=>response.json())
            .then(users => this.setState({friends:users}));

    }

    onSearchUse = (event) => { //state obj
        //this.state.searchfield =
        this.setState({searchfield:event.target.value}) // only way to change state

        //console.log(filteredFriends);
    }


    render(){
        const filteredFriends = this.state.friends.filter(friend=>{
            return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className='tc'>
        <h1 className='f1'>Friend List</h1>
        <Search searchUse={this.onSearchUse} />
        <Scroll>
            <CardList friends={filteredFriends}/>
        </Scroll>
        </div>
    );
  }
}
export default App;