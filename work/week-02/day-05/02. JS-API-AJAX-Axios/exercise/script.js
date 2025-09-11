const randomDogUrl = 'https://dog.ceo/api/breeds/image/random';
const listAllBreedsUrl = 'https://dog.ceo/api/breeds/list/all';




//************* CHACHED ATTRIBUTES ***************/

const dgImgEl =document.getElementById("dogImage")
const dogBreedSelectEl = document.getElementById("dogsSelectTag")
const randomDogBtnEl = document.getElementById('getRadomDogButton')


//************* EVENT LISTENE************* */
dogBreedSelectEl.addEventListener("click", async (evnt) =>{
    try{
        //  console.log("Event listener is working",evnt.target.value, Boolean(evnt.target.value))
         if (!Boolean(evnt.target.value))
            return
        // console.log('The value is truthy',evnt.target.value)
        // dogBreed = evnt.target.value;
        // const dogBreedURL = `https://dog.ceo/api/breeds/${dogBreed}/images`;
        
        const res = await fetch(`https://dog.ceo/api/breed/${evnt.target.value}/images`)
         const data = await res.json();
        //  console.log("Feteched data: ",data.message[0])
        dgImgEl.setAttribute('src',data.message[0])
        dgImgEl.setAttribute('alt',evnt.target.value)
    }catch (err){
        console.log(err)
    }

}
)

randomDogBtnEl.addEventListener('click',async()=>{
    try{
        console.log
        const res = await fetch(randomDogUrl)
        const data = await res.json();
        dgImgEl.setAttribute('src',data.message[0])
        dgImgEl.setAttribute('alt',evnt.target.value)
    }catch(err){
        console.log(err)
    }


})

async function getAllDogs() {
    try{
        const response = await fetch(listAllBreedsUrl)
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        const allDogBreeds = Object.keys(data.message)
        allDogBreeds.forEach(breed => {
            
            const newOptionEl = document.createElement("OPTION")
            newOptionEl.setAttribute("vale",breed)
            newOptionEl.textContent = breed
            dogBreedSelectEl.appendChild(newOptionEl)
            // console.log(newOptionEl)
        })

    } catch (err) {

    }
}

getAllDogs();