/* eslint-disable react-refresh/only-export-components */
export default () => {
    const status = false

    return (
        <h2
            style={{
                color: status ? "#4ade80" : "#f87171"
            }}
        >
            Current status: {status ? "ON" : "OFF"}
        </h2>
    )
}