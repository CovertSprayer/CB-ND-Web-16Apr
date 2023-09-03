import React from 'react'
import Person from './components/Person'
import Random from './components/Random'

const App = () => {

  return (
    <div>
      <Random/>

      <Person name='Abhishek' age='25' role='Web Dev' />
      <Person name='Rahul' age='35' role='SDE'/>
      <Person name='Ram' age='29' role='BlockChain Dev'/>
    </div>
  )
}

export default App