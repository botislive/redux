import { useAtom } from 'jotai'
import { countAtom } from '../atoms'


function Buttons() {
    const [, setCount] = useAtom(countAtom)
  return (
    <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
          <button onClick={() =>setCount((prevCount) => prevCount - 1)}>Decrement</button>
    </div>
  )
}

export default Buttons