document.addEventListener('DOMContentLoaded', () => {

    //Get ramen data call
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(data => {
        renderRamens(data)
    })
    .catch(e => console.error(e))

    //display ramen images at top of page
    function renderRamens(ramenDatas){
        console.log(ramenDatas);
        ramenDatas.forEach(ramenData =>{
            const ramenImages= document.getElementById("ramen-menu");
            let ramenImg = document.createElement("img");   
            ramenImg.src = ramenData.image;
            ramenImg.alt = ramenData.name;
            ramenImg.id = ramenData.id;
            
            ramenImg.addEventListener("click", () => renderRamen(ramenData));
            

            ramenImages.append(ramenImg);
        })
        document.querySelector('#new-ramen').addEventListener('submit', handleForm)

    }
//functions
    function renderRamen(ramenData){
        //function to display the selected ramen details
                //console.log(e.target);
                //console.log(ramenData);
        let name = document.querySelector("#ramen-detail .name");
        let rating = document.getElementById("rating-display");
        let comment = document.getElementById("comment-display");
        let restaurant = document.querySelector("#ramen-detail .restaurant");
        let image = document.querySelector("#ramen-detail .detail-image");
        image.src = ramenData.image;
        image.alt = ramenData.name;
        name.textContent = ramenData.name;
        rating.textContent = ramenData.rating;
        comment.textContent = ramenData.comment;
        restaurant.textContent = ramenData.restaurant;

        const ramenImages= document.getElementById("ramen-menu");
            let ramenImg = document.createElement("img");   
            ramenImg.src = ramenData.image;
            ramenImg.alt = ramenData.name;
            ramenImg.id = ramenData.id;
            
            ramenImg.addEventListener("click", () => renderRamen(ramenData));
            

            ramenImages.append(ramenImg);
    }
    function handleForm(e){
        e.preventDefault()
        //Builds Book
        console.log(e.target.comment);
        const ramen = {
            name: e.target.name.value,
            restaurant:e.target.restaurant.value,
            rating: e.target.rating.value,
            image: e.target.image.value,
            comment:e.target.comment.value
        }
        renderRamen(ramen)
    }
    
})
    