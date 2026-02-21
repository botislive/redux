import { Suspense } from 'react'
import './App.css'
import Users from './components/Users'

function App() {

  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
        <Users/>
     </Suspense>
    </>
  )
}

export default App
