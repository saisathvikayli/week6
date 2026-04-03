import { useContext } from 'react'
import { counterContextObj } from '../context/contextprovider'
import { useCounterStore } from '../store/CreateStore'



function Home() { 
  
  const {counter,changeCounter} = useContext(counterContextObj)
  const {counter2,changeCounter2}=useContext(counterContextObj)

  const {newcounter,incrementCounter,decrementCounter} = useCounterStore()

  return (
  
    <div>
      <h1 className=' text-4xl'>Counter : {counter}</h1>
      <button onClick={changeCounter} className=' bg-amber-400 p-5' >Change</button>

    <h1 className=" text-4xl text-blue-600">New counter increment :{newcounter}</h1>
    <button onClick={incrementCounter} className='bg-blue-800 p-7'>increment</button>

      <h1 className=' text-4xl'>Counter : {counter2}</h1>
      <button onClick={changeCounter2} className=' bg-amber-400 p-5' >Change</button>
    </div>
  )
}

export default Home