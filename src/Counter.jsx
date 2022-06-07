import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('mounting')

        console.log('updating'+count)
        return ()=>{
            console.log('clean up'+count)
        }
    },[count])
    // const [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>increment</button>
      <h1>hello i am component {count}</h1>
    </div>
  )
}

export default Counter





// function counter({title,...obj}) {
//     // const {title,count}=props
//   return (
//     <div>
//       {/* <h1>{props.title} {props.count}</h1> */}
//       <h1>{title} {obj.count}</h1>

//     </div>
//   )
// }

// export default counter
