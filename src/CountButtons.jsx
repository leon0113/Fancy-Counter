/* eslint-disable react/prop-types */
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

export default function CountButtons({ handleCountMinus, handleCountPlus, count }) {
    return (
        <div className="button-container">
            <CountBtn type={"minus"} handleCountPlus={handleCountPlus} handleCountMinus={handleCountMinus} count={count} />
            <CountBtn type={"plus"} handleCountPlus={handleCountPlus} handleCountMinus={handleCountMinus} count={count} />
        </div>
    )
}


function CountBtn({ type, handleCountMinus, handleCountPlus, count }) {
    return (
        <button onClick={type === 'minus' ? handleCountMinus : handleCountPlus} className="count-btn" disabled={count === 10}>
            {
                type === 'minus' ? <MinusIcon className="count-btn-icon" /> : <PlusIcon className="count-btn-icon" />
            }
        </button>
    )
}