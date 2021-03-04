import styles from './index.less';
import {useState} from 'react';

interface Person{
  name:string;
  age:number;
}

function greeter(person:string):string{
  return `Hello,${person}`;
}

function sayHello(person:Person):string{
  return `Hello,${person.name}`;
}

let user = {name:"lihu",age:12}


export default function IndexPage() {
  const [message, setmessage] = useState("");
  const [count,setcount] = useState(1);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h1>{message}{count}</h1>
      <h1>{sayHello({name:"lihu",age:12})}</h1>
      <button onClick={()=>{
        setcount(count+1);
        setmessage(greeter("lihu"));
      }}>Click</button>
    </div>
  );
}
