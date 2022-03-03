import React from 'react';

const Card = ({name, email,id}) =>{
    const photo = ["charles-etoroma","charles-etoroma","jake-nackos","leilani-angel","marie-michele-bouchard",
                   "marlon-alves","prince-akachi","shayna-douglas","stephanie-liverani","shayna-douglas","stephanie-liverani"]
    return(

        <div className='bg-washed-green dib br3 pa3 grow shadow-5 tc'style={{margin:"8px"}}>

            {/* <img style={{width:"180px", height:"250px"}} alt="My Friend"

            src={`../images/${photo}.jpg`} /> */}

            <img style={{width:"180px", height:"250px"}} alt="My Friend"
            src={`../images/${photo[id]}.jpg`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;