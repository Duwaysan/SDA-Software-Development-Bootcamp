export default async function sendRequest(url, method="GET", payload) {
    const options = { method }
    
    if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
        // console.log("Creating note with payload:", payload)
	}
    
    try {
        const res = await fetch(`http://127.0.0.1:8000${url}`,options)
        
        if (res.ok) return res.json()
    } catch (error) {
        console.log(error, "error in send-request")
        return error
        
    }
}