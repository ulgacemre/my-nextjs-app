import React, {useState} from 'react';

export default function Counter(){

   // let number = 0;

   const[number,setNumber] = useState(1);
   const[name, setName] = useState('John2');


    function increase(){

        //number = number + 1;
        setNumber(number + 1)
        setName('Emily')
        console.log(number);

    }

    function decrease(){
        //number = number -1;
        setNumber(number - 1)
        setName("John")
        console.log(number);
    }

    console.log('Counter',number);


    return(
        <>
            <h1>Counter</h1>
            <button onClick={increase}>Increase(Arttir)</button><br></br>
            <button onClick={decrease}>Decrease(Azalt)</button>

            <h2>Number: {number}</h2>
            <h2>Name: {name}</h2>
        </>
    )
}