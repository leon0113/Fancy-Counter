import { useEffect, useState } from 'react'
import Count from './Count'
import CountButtons from './CountButtons'
import ResetButton from './ResetButton'
import Title from './Title'

const Card = () => {
    const [count, setCount] = useState(0);
    const locked = count === 5 ? true : false;
    // console.log(count);
    const handleCountPlus = (e) => {
        const newCount = count + 1;
        if (newCount > 5) {
            setCount(5);
            return;
        }
        setCount(newCount);
        e.currentTarget.blur();
    };

    const handleCountMinus = (e) => {
        if (count > 0) {
            setCount(prev => prev - 1)
        } else {
            return 0;
        }
        e.currentTarget.blur();
    };

    const handleCountReset = (e) => {
        setCount(0);
        e.currentTarget.blur();
    };


    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.code === 'Space') {
                setCount(count + 1);
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, [count])

    return (
        <div className={`card ${locked ? 'card--limit' : ""}`}>
            <Title locked={locked} />
            <Count count={count} />
            <ResetButton handleCountReset={handleCountReset} />
            <CountButtons handleCountMinus={handleCountMinus} handleCountPlus={handleCountPlus} locked={locked} />
        </div>
    )
}

export default Card