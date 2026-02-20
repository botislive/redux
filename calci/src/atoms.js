import {atom} from 'jotai'

export const numbersAtom=atom({number1:0,number2:0})

export const addnumbersAtom=atom((get)=>{
    const {number1,number2}=get(numbersAtom)
    return number1+number2
})

export const subnumbersAtom=atom((get)=>{
    const {number1,number2}=get(numbersAtom)
    return number1-number2
})

export const mulnumbersAtom=atom((get)=>{
    const {number1,number2}=get(numbersAtom)
    return number1*number2
})