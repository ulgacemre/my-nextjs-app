

export default function Title(props:any) {

    console.log("props",props);

    if(props.isTitleHidden === true){
        console.log("Title is hidden!!")
    }
    else{
        console.log("Title is not hidden!!")
    }

    console.log("meyveler",props.fruits);

    return(<>
          <h1>{props.text}</h1>
          <h2>{props.subTitle}</h2>
          <p>{props.color}</p>
          <p>{props.titleNumber}</p>
          <p>{props.isTitleHidden.toString()}</p>
          <button onClick={props.click} >Title Click</button>
          <p>Name: {props.user.name}</p>
          <p>Age: {props.user.age}</p>
     </>
    )
}