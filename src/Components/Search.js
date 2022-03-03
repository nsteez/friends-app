import React from 'react';
const Search = ({searchUse}) => {
    return (
        <div className='pa2'>
        <input className="pa3 b--green ba " type='search' placeholder='search friends'
          onChange={searchUse}/>
        </div>

    );
}
export default Search;