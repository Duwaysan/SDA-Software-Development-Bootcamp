export default async function sendRequest(url, method="GET") {
    const options = { method }
    
    try {
        const res = await fetch(`http://127.0.0.1:8000${url}`,options)
        if (res.ok) return res.json()
    } catch (error) {
        console.log(error, "error in send-request")
        return error
        
    }
}