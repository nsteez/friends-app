import React from 'react';
import Card from './Card';
//import {friends} from './friends';
const CardList = ({friends}) => {
    return(
        <div>

            {

            friends.map((friend, idx) =>{
                return( <Card key={idx}
                    id={friends[idx].id}
                    //photo={friends[photo].photo}
                    //photo={`../images/${photo}.jpg`}
                    name={friends[idx].name}
                    email={friends[idx].email}/>
        );
        })}
    </div>
    );}
export default CardList