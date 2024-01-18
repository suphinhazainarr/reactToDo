
import React,{useEffect} from 'react';

const Counter = (props) => {

  useEffect(() => {
    console.log('mounting..')

    return ()=>{
      console.log('unmounting....')
    }
  },[])

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      {/* Other Counter component content */}
    </div>
  );
};

export default Counter;
  