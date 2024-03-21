/* eslint-disable react/prop-types */
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

export default function CountButtons({ handleCountMinus, handleCountPlus, locked }) {
    return (
        <div className="button-container">
            <CountBtn type={"minus"} handleCountPlus={handleCountPlus} handleCountMinus={handleCountMinus} locked={locked} />
            <CountBtn type={"plus"} handleCountPlus={handleCountPlus} handleCountMinus={handleCountMinus} locked={locked} />
        </div>
    )
}


function CountBtn({ type, handleCountMinus, handleCountPlus, locked }) {
    return (
        <button onClick={type === 'minus' ? handleCountMinus : handleCountPlus} className="count-btn" disabled={locked}>
            {
                type === 'minus' ? <MinusIcon className="count-btn-icon" /> : <PlusIcon className="count-btn-icon" />
            }
        </button>
    )
}