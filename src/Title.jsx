/* eslint-disable react/prop-types */

const Title = ({ locked }) => {
    return (
        <h1 className="title">
            {
                locked ? <span>LIMIT! BUY <b>PRO</b> FOR &gt;5</span> : <span>Fancy Counter</span>
            }
        </h1>
    )
}

export default Title