import './App.css'
import { useAtom} from 'jotai'
import Buttons from './components/Buttons'
import { countAtom } from './atoms'
import { doubleCountAtom } from './atoms'


function App() {
          const [count] = useAtom(countAtom)
          const [doubleCount] = useAtom(doubleCountAtom)
  return (
    <>
         <div>
          <h1>Jotai State management</h1>
          <p>Count: {count}</p>
          <p>Double Count: {doubleCount}</p>
          <Buttons/>

         </div>
    </>
  )
}

export default App
