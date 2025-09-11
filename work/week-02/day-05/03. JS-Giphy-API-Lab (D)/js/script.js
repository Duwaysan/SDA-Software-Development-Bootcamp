const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`;
const giphyTrendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`

// GRAB THE BUTTON ELEMENT FROM THE DOM
const randomGiphyBtn = document.getElementById('getRandomGiphyButton')
const trendGiphyBtn = document.getElementById('getTrendingGiphyButton')
const giphyImg = document.getElementById('giphyImageTag')
const giphyTitle = document.getElementById('giphyTitleDiv')
const giphySearch = document.getElementById('getSearchGiphyButton')
// console.log(randomGiphyBtn)

// ADD A CLICK EVENT LISTENER
randomGiphyBtn.addEventListener('click', async() => {
    try{
        const res = await fetch(giphyRandomEndpoint)
        const data = await res.json()
        giphyImg.setAttribute('src',data.data.images.original.url)
        giphyTitle.innerHTML = data.data.title

    } catch (err) {
        console.log(err)
    }
})


trendGiphyBtn.addEventListener('click', async() => {
    try{
        const res = await fetch(giphyTrendingEndpoint)
        const data = await res.json()
        console.log(data)
        
        giphyImg.setAttribute('src',data.data[0].images.original.url)//data.data.url)
        giphyTitle.innerHTML = data.data[0].title
    } catch (err) {
        console.log(err)
    }
})

giphySearch.addEventListener('click', async() => {
    try{
        const searchQuery = document.querySelector('input[name="user-input"]')
        console.log(searchQuery.value)
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=2041494ca782403cb6055682a7943c75&tag=${searchQuery.value}&rating=G`)
        const data = await res.json()
        console.log(data)
        
        giphyImg.setAttribute('src',data.data.images.original.url)//data.data.url)
        giphyTitle.innerHTML = data.data.title
    } catch (err) {
        console.log(err)
    }
})


// INSIDE THE EVENT HANDLER, MAKE A FETCH GET REQUEST TO THE
// giphyRandomApiUrl ENDPOINT

// IN THE .THEN METHOD, PARSE THE JSON RESPONSE OBJECT AND FIND
// THE image_url key

// CHANGE THE SRC ATTRIBUTE ON THE IMG TAG TO THE image_url KEY

// CHANGE THE INNER TEXT OF THE giphyTitleDiv TO  THE title KEY
