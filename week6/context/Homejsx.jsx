import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'

function Home() {

  const {counter,incrementCounter,decrementCounter}=useContext(counterContextObj);

  return (
    <div className='grid lg:grid-cols-2 gap-3 py-10 mx-40 min-h-screen bg-pink-600'>
      <div className='block mx-auto p-5'>
      <h1 className='text-3xl'>EditCounter1</h1>
      <div className='bg-orange-600 text-center p-3'>
        <p className='p-3 text-2xl'>{counter}</p>
        <div className='gap-2 grid lg:grid-cols-2'>
      <button onClick={incrementCounter} className='bg-purple-900 p-2 text-white'>+</button>
      <button onClick={decrementCounter} className='bg-purple-900 p-2 text-white'>-</button>
      </div>
      </div>
      </div>
      <div className='block mx-auto p-5'>
      <h1 className='text-3xl'>EditCounter2</h1>
      <div className='bg-orange-600 text-center p-3'>
        <p className='p-3 text-2xl'>{counter}</p>
        <div className='gap-2 grid lg:grid-cols-2'>
      <button onClick={incrementCounter} className='bg-purple-900 p-2 text-white'>+</button>
      <button onClick={decrementCounter} className='bg-purple-900 p-2 text-white'>-</button>
      </div>
      </div>
      </div>
      <div className='block mx-auto p-5'>
      <h1 className='text-3xl'>EditCounter3</h1>
      <div className='bg-orange-600 text-center p-3'>
        <p className='p-3 text-2xl'>{counter}</p>
        <div className='gap-2 grid lg:grid-cols-2'>
      <button onClick={incrementCounter} className='bg-purple-900 p-2 text-white'>+</button>
      <button onClick={decrementCounter} className='bg-purple-900 p-2 text-white'>-</button>
      </div>
      </div>
      </div>
      <div className='block mx-auto p-5'>
      <h1 className='text-3xl'>EditCounter4</h1>
      <div className='text-center bg-orange-600 p-3'>
        <p className='p-3 text-2xl'>{counter}</p>
        <div className='gap-2 grid lg:grid-cols-2'>
      <button onClick={incrementCounter} className='bg-purple-900 p-2 text-white'>+</button>
      <button onClick={decrementCounter} className='bg-purple-900 p-2 text-white'>-</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home