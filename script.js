//////////////////
//MODEL SECTION//
/////////////////

    //initialize correct-answer-id

    //initialize square object
        //object contains true or false, Color

    //initialize square array, that contains square objects. ID = index.

//////////////////////
//CONTROLLER SECTION//
/////////////////////

    //check answer 
        //receives index of sqaure clicked from view section
        //checks if the correct square, using the 'correct' tag in the array 
        //returns true or false

    //reset function


    //reset/Fill square array 
        //loops through the square array, 
            // sets color by calling generate RGB function
            // sets all index to false.
            // call color-square view function to update the visual colors
    
    //set correct answer 
        //generate a random number between 0 and 5 this will be the correct ID 
        //access the RBG at this index and set its truth value to TRUE
        //set the correct-answer-id variable to this squares ID

    

/////////////////
//VIEW SECTION///
////////////////

    //square clicked event function
        //calls check answer function
        //if true, 
            //call display correct function
            //call reset board function
        //if false, 
            //call display incorrect function
            //call grey out square function
        //
 
    //display correct function
        //display text over the square 

    //display incorrect! function 
        //display text over the square 

    //grey out square function
        //use html to grey out the square at the particular ID/index

    //reset board button clicked function
        //call reset/fill square array function
        //call color the squares function

    //color-square
        //called by controller section. receives ID and RGB value 
        //sets the html square to index color

    //reveal answer button clicked function
        //use correct-answer-id 
        //call the display correct square function on that id

    //render
















