                //Chapter 14-16

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [ ];
// console.log(arr);

// 2. Declare an empty array using JS object notation to store
// student names in future.

//  var a = [];
//  var b = new Array  ( ) ;
//  console.log(b);


// 3. Declare and initialize a strings array.

//  var string = [];
//  push = ["cow" , "fox" , "crow"];
//  document.write(push);


// 4. Declare and initialize a numbers array.

// var num = [];
// push = [2,3,4,5];
// document.write(push);

// 5. Declare and initialize a boolean array.

// var array = [];
//  push = [0 , 0.5 , 1 , "false", "" , "true"];
// document.write(push);

// 6. Declare and initialize a mixed array.

// var mixed_array = [1 , 2 , 3 , "one" , "two" , "three"];
// document.write(mixed_array);


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// document.write("Qualification" + "<br>" + "<br>");
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.","PhD"];
// for (let i=0; i<=7; i++){
//     document.write(qualifications[i] + "<br>");
// }


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var student = ["Micheal","Jhone","Tony"];
// var score = [320,230,480];
// var percentages = ["64%" ,"46%", "96%"];
// document.write("Score of" + " " + student[0]+" " + "is" + " " + score[0] +"." + " " + "percentages"+ " " + percentages[0] + "<br>");
// document.write("Score of" + " " + student[1]+" " + "is" + " " + score[1] +"." + " " + "percentages"+ " " + percentages[1] + "<br>");
// document.write("Score of" + " " + student[2]+" " + "is" + " " + score[2] +"." + " " + "percentages"+ " " + percentages[2] );


// 9. Initialize an array with color names. Display the array
// elements in your browser.

 //   var colorName = [ "Red","Green","Blue","Black","Pink" ];
 //   for(var i=0;i<=4;i++){
 //       document.write(colorName[i] +"<br>");
 //   }

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

//    var color = ["White","Purple"];
// var want = prompt("Are you add the color at the begins [yes/no]");
// if(want === "yes"){
//     var i = prompt("Which Color you Add");
//     color.unshift(i);
//     document.write(color);
    
// }

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var color = ["White","Purple"];
// var want = prompt("Are you add the color at the end [yes/no]");
// if(want === "yes"){
//     var i = prompt("Which Color you Add");
//     color.push(i);
//     document.write(color);
// }

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

    //   var color = ["White","Purple"];
    // var i = prompt("Which 2 Colors you Add");
    // color.unshift(i);
    // document.write(color);

//     d. Delete the first color in the array. Display the updated
// array in your browser.
    
    //   var color = ["Pink","Red","White","Purple"];
    //   document.write(color + "<br>");
    //   var colors = ["Pink","Red","White","Purple"];
    // colors.shift(colors);
    // document.write(colors);

//     e. Delete the last color in the array. Display the updated
// array in your browser.


    //  var color = ["Pink","Red","White","Purple"];
    //    document.write(color + "<br>");
    //    var colors = ["Pink","Red","White","Purple"];
    //  colors.pop(colors);
    //  document.write(colors);

//     f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
    
    //  var index = prompt("Which index position you add color");
    //  var colors = prompt("Enter Color Name");
    //  var color = ["Red","Green","Blue","Black","Pink" ];
    //  color.splice(index,0,colors);
    //  document.write(color );

//     g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

//      var index = prompt("Which index position you delete color");
//      var num = prompt("Enter Color Name");
//      var color = ["Red","Green","Blue","Black","Pink" ];
//      color.splice(index,1);
//      document.write(color );



// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

//  var students_scores = [320,230,480,120];
//  var order_score = [320,230,480,120];
//  order_score.sort();
//  document.write("Scores of Students" + " " + students_scores + "<br>" + "Orederd Scores of student " + order_score );


//  11. Write a program to initialize an array with city names.
//  Copy 3 array elements from cities array to selectedCities
//  array.

//  var city = ["karachi","Islamabad","Lahore","Hyderabad","Quatta"];
//  var copyCities = city.slice(1,4) ;
//  document.write("Cities list:" + "<br>" + city +"<br>"+"<br> " + "Selected cities list:" + "<br>"+ copyCities );



// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This ", " is" ,  "my ",  "cat"];
// var join = arr.join(" ");
// document.write("Array:"+ "<br> " + arr + " <br>" + "<br>" + "String" + "<br> "+ join );


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

//  var arry=["keyboard","mouse","printed","mointer"]

//  for(var i=0;i<=3;i++){
//       document.write("Out:"+"<br>"+arry[i]+"<br>")
//  }

//  14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var arry=["keyboard","mouse","printed","mointer"]

//    for(var i=3;i>=0;i--){
//         document.write("Out:"+"<br>"+arry[i]+"<br>")
//    }

//question 15 is on index page.

                //Tables 2 to 20


//       var table = 2;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
// document.write("<br>");

//    var table = 3;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 4;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 5;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 6;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 7;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 8;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 9;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 10;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 11;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 12;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 13;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 14;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 15;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 16;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 17;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 18;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>");
//    }
//    document.write("<br>");

//    var table = 19;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");

//    var table = 20;
//    for(var a=1; a<11;a++){
//        document.write(table+"x "+a+" = "+a*table + "<br>")
//    }
//    document.write("<br>");