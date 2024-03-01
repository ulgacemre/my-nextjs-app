'use client';
import Example from "./Example"
import Link from 'next/link';
import Image from 'next/image';
import Title from './Title';
import Counter from './Counter';
import Toggle from './Toggle';

export default function Home() {
  
  const handleClick = () => {
    console.log('Button clicked 1');

    alert('Button clicked 1');
  
  }

  function handleClick2() {
    console.log('Button clicked 2');
  }

  function sumOfNumbers() {

    const a = 10;
    const b = 20;

    const sum = a + b;

    alert('Sum of 2 numbers:' + sum);

  }

  const items = ["Elma","Armut","Portakal"];

  const user = { name: "John", age: 25};

  return (
    <div>
      {/* 
      <div>
        <p> Hello Next JS</p>
        <h2>Next js framework</h2>
        <h3>Lesson 1 23</h3>
      </div>
      <div>
         <button onClick={handleClick}>Click Me</button>
         <button onClick={handleClick2}> Click me 2</button>
         <button onClick={sumOfNumbers}>
           Sum of 2 numbers!!
         </button>
         <br></br>
         <a href="/blog-posts">
           <button>Blog Posts Page</button>
         </a>
        <br></br>
         <Link href="/blog-posts">
            <button>Blog Post Page 2</button>
         </Link>
          <br></br>
          <Link href="/about">
            About Page
          </Link>
          <h1>Classic Image Tag</h1>
          <img src="/nextjs.jpeg" alt="image" />

          <br></br>
          <h1>Next js Image Tag</h1>
          <Image src="/nextjs.jpeg" alt="Image" width={200} height={200}/>
          <br></br>

        </div>
          */}

            {/** Props */}
            <Title  
              text={"Blog posts"} 
              subTitle={"Sub blog post"} 
              color={"yellow"} 
              titleNumber={45889} 
              isTitleHidden={false} 
              click={handleClick} 
              fruits={items}
              user={user}
            />

            <Counter />

            <Toggle />

    </div>
  );
}
