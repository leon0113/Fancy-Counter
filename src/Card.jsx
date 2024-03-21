import { useState } from 'react'
import Count from './Count'
import CountButtons from './CountButtons'
import ResetButton from './ResetButton'
import Title from './Title'

const Card = () => {
    const [count, setCount] = useState(0);
    const handleCountPlus = () => {
        if (count <= 9) {
            setCount(prev => prev + 1)
        } else {
            return 0;
        }
    };
    const handleCountMinus = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
        } else {
            return 0;
        }
    };

    const handleCountReset = () => setCount(0);

    return (
        <div className='card'>
            <Title />
            <Count count={count} />
            <ResetButton handleCountReset={handleCountReset} />
            <CountButtons handleCountMinus={handleCountMinus} handleCountPlus={handleCountPlus} count={count} />
        </div>
    )
}

export default Card