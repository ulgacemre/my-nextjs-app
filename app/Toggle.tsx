import React, {useState} from 'react';

export default function Toggle(){

    const[isOpen, setIsOpen] = useState(false);

    function changeState(){
        if(isOpen === true){
            setIsOpen(false)
        }
       else{
            setIsOpen(true)
         }  
    }

    return(
        <>
            <h1>Toggle</h1>

            <button onClick={changeState}> Kapat/Ac Butonu</button>
            <p>{isOpen.toString()}</p>
        
        </>
    )
}