// write your code here
console.log("👀")




fetch( "http://localhost:3003/ramens" )
.then( response => response.json() )
.then( ( data )=>{  handleRamenGetFetchRequest( data )  } )
// .then( ( data )=>{ console.log(data) } )
// .then( data => console.log( data ) )



// ( data )=>{  handleRamenGetFetchRequest( data )  }
// function     handleRamenGetFetchRequest( dataFromFetch  ){  
//                                          🚪
function handleRamenGetFetchRequest( dataFromFetch  ){  ////////////////


    console.log( "dataFromFetch: " , dataFromFetch )  //


    // const divForRamenImagesFromTheDOM = document.querySelector( "div" )
    //     console.log( "divForRamenImagesFromTheDOM: " , divForRamenImagesFromTheDOM )  //

    const divForRamenImagesFromTheDOMWithID = document.querySelector( "#ramen-menu" )
        console.log( "divForRamenImagesFromTheDOMWithID: " , divForRamenImagesFromTheDOMWithID )  //

    // const divForRamenImagesFromTheDOMWithClass = document.querySelector( ".ramen-menu" )
    //     console.log( "divForRamenImagesFromTheDOMWithClass: " , divForRamenImagesFromTheDOMWithClass )  //


    // JUST A REMINDER IT IS AN ARRAY OF OBJECTS
    dataFromFetch.forEach( handleRamenArrayForEach )
        
    // ✅
    function handleRamenArrayForEach( eachRamenObject ){


        const imageTagForRamen = document.createElement( "img" )
            imageTagForRamen.src = eachRamenObject.image

            //// Handling the Click Functionality 
            imageTagForRamen.addEventListener( 
                
                "click" 
                
                    , 
                
                function(){

                    console.log("click :)")  //

                    const imageInTheMiddleOfThePage = document.querySelector( ".detail-image" )
                        imageInTheMiddleOfThePage.src = eachRamenObject.image

                    const insertNameTextOnImage = document.querySelector( ".name" )
                        insertNameTextOnImage.textContent = eachRamenObject.name

                    const insertRestaurantTextOnImage = document.querySelector( ".restaurant" )
                        insertRestaurantTextOnImage.textContent = eachRamenObject.restaurant

                    const insertRatingTextBelowImage = document.querySelector( "#rating-display" )
                        insertRatingTextBelowImage.textContent = eachRamenObject.rating

                    const inserCmmmentTextBelowImage = document.querySelector( "#comment-display" )
                        inserCmmmentTextBelowImage.textContent = eachRamenObject.comment
                    
                        // console.log( "insertNameTextOnImage: " , insertNameTextOnImage )  ////


                } 

            )

            // <h3>Comment:</h3>
            // <p id='comment-display'>
            // Insert comment here
            // </p>

      
            // <h3 class="restaurant">Insert Restaurant Here</h3>
        

        divForRamenImagesFromTheDOMWithID.append( imageTagForRamen )

    }




    //// Handling the Form 


        const formForNewRamen = document.querySelector( "#new-ramen" )
        
        // formForNewRamen.addEventListener( "submit" , function(){} )
        // formForNewRamen == "event.target"
        formForNewRamen.addEventListener( 
            
            "submit" 
            
            , 
            
            function( event ){
                
                event.preventDefault()
                // Preventing the Default Behavior of a Form Submit


                //// Handle Adding a New Ramen

                    const divForRamenImagesToAddTo = document.querySelector( "#ramen-menu" )

                        const imageTagForNewRamen = document.createElement( "img" )
                        imageTagForNewRamen.src = event.target.image.value
        
                    //// Handling the Click Functionality 
                    imageTagForNewRamen.addEventListener( 
                        
                        "click" 
                        
                            , 
                        
                        function(){
        
                            console.log("click :)")  //


                            const newRamen ={

                                // "id": 1,
                                "name": event.target.name.value ,
                                "restaurant": event.target.restaurant.value ,
                                "image": event.target.image.value ,
                                "rating": event.target.rating.value ,
                                "comment":  event.target["new-comment"].value

                            }
                            console.log( "newRamen: " , newRamen )  //


        
                            const imageInTheMiddleOfThePage = document.querySelector( ".detail-image" )
                                imageInTheMiddleOfThePage.src = newRamen.image
        
                            const insertNameTextOnImage = document.querySelector( ".name" )
                                insertNameTextOnImage.textContent = newRamen.name
        
                            const insertRestaurantTextOnImage = document.querySelector( ".restaurant" )
                                insertRestaurantTextOnImage.textContent = newRamen.restaurant
        
                            const insertRatingTextBelowImage = document.querySelector( "#rating-display" )
                                insertRatingTextBelowImage.textContent = newRamen.rating
        
                            const inserCmmmentTextBelowImage = document.querySelector( "#comment-display" )
                                inserCmmmentTextBelowImage.textContent = newRamen.comment
        

                        } 
                            
                    )
                    
                    divForRamenImagesToAddTo.append( imageTagForNewRamen )

                    event.target.reset()

                //// Handle Adding a New Ramen

                
                




                    // console.log( "event: " , event )  ////
                    // console.log( "event.target: " , event.target )  ////

                    // console.log( "event.target.name: " , event.target.name )  ////
                    //     console.log( "event.target.name.value: " , event.target.name.value )  ////
                    
                    // console.log( "event.target.restaurant: " , event.target.restaurant )  ////
                    //     console.log( "event.target.restaurant.value: " , event.target.restaurant.value )  ////
                
                


                } 
                
            )



    //// Handling the Form 

    // <!-- New Ramen Form -->
    // <form id="new-ramen">
      
    //   <h4>Add New Ramen</h4>
    
    //   <label for="name">Name: </label>
    //   <input type="text" name="name" id="new-name" />

    //   <label for="restaurant">Restaurant: </label>
    //   <input type="text" name="restaurant" id="new-restaurant" />

    //   <label for="image">Image: </label>
    //   <input type="text" name="image" id="new-image" />

    //   <label for="rating">Rating: </label>
    //   <input type="number" name="rating" id="new-rating" />

    //   <label for="new-comment">Comment: </label>
    //   <textarea name="new-comment" id="new-comment"></textarea>

    //   <input type="submit" value="Create" />

    // </form>




} //////////////////////////////////////////////////////////////////////


































// document.addEventListener( 
    
//     "DOMContentLoaded" , 
    
//     function(){   //// prettyMuchYourIndex.js - Lolol




//         fetch( "http://localhost:3003/ramens" )
//         .then( ( response ) =>{ return response.json() }  )
//         .then( 
            
//             ( data ) => { 
                
//                 console.log("  doin other crazy complex things")
//                 console.log("  doin other crazy complex things")
//                 console.log("  doin other crazy complex things")
//                 console.log("  doin other crazy complex things")
//                 console.log("  doin other crazy complex things")


//                 data.forEach(  renderRamensUsingForEach  ) 



//             }
            
//         )
//         // .then( 
            
//         //     data => data.forEach(  renderRamensUsingForEach  ) 
            
//         // )





//         // data: [ {}{}{} ]  renderRamensUsingForEach( {} )


//         function renderRamensUsingForEach( eachRamenObject ){


//             console.log("  doin other crazy complex things")
//             console.log("  doin other crazy complex things")
//             console.log("  doin other crazy complex things")
//             console.log("  doin other crazy complex things")
//             console.log("  doin other crazy complex things")
//             console.log("  doin other crazy complex things")
//             console.log("  doin other crazy complex things")


//         const divForRamenImages = document.querySelector( "div" )

//             const imageForRamen = document.createElement( "img" )
//                 imageForRamen.src = eachRamenObject.image

//             console.log( divForRamenImages )  ////

//             divForRamenImages.append( imageForRamen )

//         }


//     }  



// )




















// fetch( "http://localhost:3003/ramens" )
// .then( ( response ) =>{ return response.json() }  )
// .then( data => data.forEach(  renderRamensUsingForEach  ) )


// function renderRamensUsingForEach( eachRamenObject ){


//     const divForRamenImages = document.querySelector( "div" )

//             const imageForRamen = document.createElement( "img" )
//                 imageForRamen.src = eachRamenObject.image

//             console.log( divForRamenImages )  ////

//             divForRamenImages.append( imageForRamen )

// }





// fetch( "http://localhost:3003/ramens" )
// .then( ( response ) =>{ return response.json() }  )
// .then( data => renderRamens( data ) )


// function renderRamens( dataFromFetch ){



//     console.log( dataFromFetch )

//         const divForRamenImages = document.querySelector( "div" )


//     dataFromFetch.forEach( 


//         function( eachRamenObject ){

//             const imageForRamen = document.createElement( "img" )
//                 imageForRamen.src = eachRamenObject.image

//             console.log( divForRamenImages )  ////

//             divForRamenImages.append( imageForRamen )


//         }


//     )

//     // //// Here's the Code For Rendering ONE Ramen

//     //     const divForRamenImages = document.querySelector( "div" )

//     //         const imageForRamen = document.createElement( "img" )
//     //             imageForRamen.src = dataFromFetch[ 0 ].image

//     //         console.log( divForRamenImages )  ////

//     //     divForRamenImages.append( imageForRamen )

//     // ////



// }
























// fetch( "http://localhost:3003/ramens" )
// .then( response => response.json() )
// .then( data =>  renderRamens(data) )


// function renderRamens( arrayOfRamenObjects ){ 
    
        
//     console.log( arrayOfRamenObjects )  //

//     // console.log( arrayOfRamenObjects[ 0 ] )  //



//     const divForRamenImages = document.querySelector( "div" )
//     console.log( "divForRamenImages: " , divForRamenImages )  //



//     let FirstRamenFromFetch = arrayOfRamenObjects[ 0 ]

//     console.log( "FirstRamenFromFetch" , FirstRamenFromFetch )

//         const imageTageForFirstRamen = document.createElement( "img" )
//             console.log( "imageTageForFirstRamen: " , imageTageForFirstRamen )  //
//             imageTageForFirstRamen.src = FirstRamenFromFetch.image
    
//     divForRamenImages.append( imageTageForFirstRamen )




//     let SecondRamenFromFetch = arrayOfRamenObjects[ 1 ]

//     console.log( "SecondRamenFromFetch" , SecondRamenFromFetch )
    
//         const imageTageForSecondRamen = document.createElement( "img" )
//             console.log( "imageTageForSecondRamen: " , imageTageForSecondRamen )  //
//             imageTageForSecondRamen.src = SecondRamenFromFetch.image
    
//     divForRamenImages.append( imageTageForSecondRamen )
    
    


// } 

// .then( 
    
//     //// Just a Function 🤷🏾‍♂️
//     ( arrayOfRamenObjects ) => { 
    
        
//         console.log( arrayOfRamenObjects )  //

//         // console.log( arrayOfRamenObjects[ 0 ] )  //



//         const divForRamenImages = document.querySelector( "div" )
//         console.log( "divForRamenImages: " , divForRamenImages )  //



//         let FirstRamenFromFetch = arrayOfRamenObjects[ 0 ]

//         console.log( "FirstRamenFromFetch" , FirstRamenFromFetch )
    
//             const imageTageForFirstRamen = document.createElement( "img" )
//                 console.log( "imageTageForFirstRamen: " , imageTageForFirstRamen )  //
//                 imageTageForFirstRamen.src = FirstRamenFromFetch.image
        
//         divForRamenImages.append( imageTageForFirstRamen )




//         let SecondRamenFromFetch = arrayOfRamenObjects[ 1 ]

//         console.log( "SecondRamenFromFetch" , SecondRamenFromFetch )
        
//             const imageTageForSecondRamen = document.createElement( "img" )
//                 console.log( "imageTageForSecondRamen: " , imageTageForSecondRamen )  //
//                 imageTageForSecondRamen.src = SecondRamenFromFetch.image
        
//         divForRamenImages.append( imageTageForSecondRamen )
        
        
    
    
//     } 


// )




// fetch( "http://localhost:3003/ramens" )
// .then( response => { return response.json() } )
// .then(       ( dataFromFetch ) => { renderRamens( dataFromFetch )  }        )




// function renderRamens( data ){

//     console.log( data )

// }














// resultOfFetch = fetch( "http://localhost:3003/ramens" ).then( response => response.json() ).then( data => console.log( data ) )
// console.log( "resultOfFetch: " , resultOfFetch ) //


// fetch( "someWebAddress/Url" )

//// GET Fetch as a one Liner
// fetch( "http://localhost:3003/ramens" ).then( response => response.json() ).then( data => console.log( data ) )


// a sync chronos
// fetch( "http://localhost:3003/ramens" )
// .then( response => response.json() )
// .then( data => console.log( data ) )


// fetch( "http://localhost:3003/ramens" )
// .then( 
    
//     // response => response.json() 

//     ( response ) => { response.json() }

//     // const someName =( response ) => { response.json() }

// )
// .then( data => console.log( data ) )



// fetch( "http://localhost:3003/ramens" )
// .then( response => response.json() )
// .then( data => console.log( data ) )

// fetch( "http://localhost:3003/ramens" )
// .then(  ( response ) => { return response.json() }  )
// .then( data => console.log( data ) )


// fetch( "http://localhost:3003/ramens" )
// .then(  function( response ){ return response.json() }  )
// .then( data => console.log( data ) )


// const someName =( response ) => { response.json() }

// const someNameAgainLol =( response ) => { 

//     return response.json() 

// }



// otherAsynchronousFunctions.then(  callBackFuntion/AnyFunction  )









// let testObjectFromDBJson = {
//     "id": 1,
//     "name": "Shoyu Ramen",
//     "restaurant": "Nonono",

//         "image": "./assets/ramen/shoyu.jpg",

//     "rating": 7,
//     "comment": "Delish. Can't go wrong with a classic!"
// }
// console.log( "testObjectFromDBJson" , testObjectFromDBJson )


// const divForRamenImages = document.querySelector( "div" )
//     console.log( "divForRamenImages: " , divForRamenImages )  //

//     const testRamenImage = document.createElement( "img" )
//         console.log( "testRamenImage: " , testRamenImage )  //
//         testRamenImage.src = testObjectFromDBJson.image

//         divForRamenImages.append( testRamenImage )














//// Save/Checkpoint : This Works to Get Images on the DOM
////    Where the Ramen Images Go 

// const divForRamenImages = document.querySelector( "div" )
//     console.log( "divForRamenImages: " , divForRamenImages )  //

//     const testImage = document.createElement( "img" )
//         console.log( "testImage: " , testImage )  //
//         testImage.src = "https://staticg.sportskeeda.com/editor/2022/05/a4e09-16532140327501-1920.jpg"
//         //X// img.src = "qwertyuiop"


//         divForRamenImages.append( testImage )

//// Functions
/*

    Writen/Custom Function

    Pre-Built Functions

*/
////