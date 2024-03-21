/* eslint-disable react/prop-types */
import { ResetIcon } from "@radix-ui/react-icons"

const ResetButton = ({ handleCountReset }) => {
    return (
        <button onClick={handleCountReset} className="reset-btn ">
            <ResetIcon className="reset-btn-icon" />
        </button>
    )
}

export default ResetButton