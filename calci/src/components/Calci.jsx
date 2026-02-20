import { numbersAtom,addnumbersAtom,subnumbersAtom,mulnumbersAtom } from '../atoms'
import { useAtom } from 'jotai'

const Calci = () => {
    const[,setNumbers]=useAtom(numbersAtom)
    const[addnumbers,]=useAtom(addnumbersAtom)
    const[subnumbers,]=useAtom(subnumbersAtom)
    const[mulnumbers,]=useAtom(mulnumbersAtom)
  return (
    
    <div><br />Calci
       <div>
        <input type='number' onChange={(e)=>setNumbers((prev)=>({...prev,number1:Number(e.target.value)}))} />
        <input type='number' onChange={(e)=>setNumbers((prev)=>({...prev,number2:Number(e.target.value)}))} />
       </div>
       <div>
             Addition is: {addnumbers} <br />
             Subtraction is: {subnumbers} <br />
             Multiplication is: {mulnumbers}
       </div>
    </div>
  )
}

export default Calci