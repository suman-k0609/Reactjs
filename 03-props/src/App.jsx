import React from 'react'
import Card from './components/Card';
const App = () => {
  return (
    <div className='parent'>
      <Card user='simi' age={18}/>
      <Card user='suman' age={20}/>
      <Card user='neha' age={22}/>
      
    </div>
  )
}

export default App