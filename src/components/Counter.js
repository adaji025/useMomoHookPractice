import React, {useMemo, useState} from 'react'

function Counter() {
    const [countOne, setcountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setcountOne(countOne + 1)
    }
    const incrementTwo = () => {
        setCountTwo(countTwo + 2)
    }
    const isEven = useMemo(() => {
        let i
        while(i < 200000000) i++
        return  countOne % 2 === 0
     }, [countOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>count One - {countOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>count Two - {countTwo}</button>
            </div>
        </div>
    )
}

export default Counter
