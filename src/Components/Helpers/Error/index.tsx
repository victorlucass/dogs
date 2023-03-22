export function Error({error}: any) {
    if(!error) return null
    return <span style={{ color: '#f31', margin: '1rem 0', display: "block" }}>{error}</span>
}