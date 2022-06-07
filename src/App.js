import './app.css'
import React, { useState } from 'react'
import Counter from './Counter'


function App() {
  const [state,setState]=useState(false)
  return (
    <div className='app'>
      <h1 onClick={()=>setState(!state)}>show/hide</h1>
      {/* { state ? <Counter/> : null} */}
      {state && <Counter/>}
    </div>
  )
}

export default App





// import {useState} from 'react'
// import Employee from './Employee'
// import Header from './components/Header'
// import ClassComponent from './components/classcomponent';
//import Counter from './Counter'





// function App(){
//   const [count,setCount]=useState(0)
//   // let count=0;
//   const addcount=()=>{
//     // count=count+1
//     setCount(count+1)
//     // console.log(count)
//   }
//   // let obj={
//   //   title:'1st counter',
//   //   count,
//   //   place:'hello'
//   // }
//   let emp=[{name:'ganesh',age:21},
//   {name:'steve job',age:20},
//   {name:'musk',age:21}]

//   return(
//     <div className='app'>
//       <button onClick={addcount}>add</button>
//       {
//         emp.map((obj,index)=>{
//           return (
//             // <Employee key={index} name={obj.name} age={obj.age}/>
//             <Employee key={index} {...obj}/>

//             )
//         })
//       }
//       {/* <Counter {...obj}/> */}
//       {/* <Counter title='1st counter' count={count}/> */}
//       {/* <Counter title='2nd counter' count={count}/> */}
//       {/* <h1>counter {count}</h1> */}
//     </div>
//   )
// }
// export const use='good'
// export default App;

// function App() {
//   const data='i am new'
//   return (
//     <div>
//     <h1 style={{color:'red',backgroundColor:'lightblue'}}>hello world </h1>
//     <br/>
//     <p className='hello'>hey guys {data}</p>
//     <Newcompoent/>
//     <Header data={data}/>
//     <ClassComponent data={data}/>
//     </div>
//   );
// }

// export default App;

// function Newcompoent(){
//   return (
//     <p>very good</p>
//   )
// }
