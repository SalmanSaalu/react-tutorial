import './app.css'
import Header from './components/Header'
import ClassComponent from './components/classcomponent';
function App() {
  const data='i am new'
  return (
    <div>
    <h1 style={{color:'red',backgroundColor:'lightblue'}}>hello world </h1>
    <br/>
    <p className='hello'>hey guys {data}</p>
    <Newcompoent/>
    <Header data={data}/>
    <ClassComponent data={data}/>
    </div>
  );
}

export default App;

function Newcompoent(){
  return (
    <p>very good</p>
  )
}
