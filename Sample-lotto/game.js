//make an array to hold the numbers
var numberArray = ['','','','','','','','',''];
var numberstring = '';
//function to generate random numbers
function random (){
    //Use a for loop to iterate through the index
    for(var i=0; i < numberArray.length; i++){
        numberArray[i] = Math.floor(Math.random()* 9) + 1;
    }
    //combine all the elements in the array into one string w/ no commas 
    numberstring = numberArray.join('');
}

//  Make the logic happen when the user clicks the screen 
    $(document).on("click", function(){
        random();
        numberArray.join('');
        console.log(numberstring);

    var newDiv = $("<div>" + numberstring + "</div>");
    // newDiv.append($("#firstDiv"));
    $("#firstDiv").text(numberstring);
    });

    
//  Display the 9 number string on the browser window
//  Create a new div to hold the 9 number string
//  Append the old div to the new div 

//  when the user clicks again, append the old div to the new div + create the new div 

