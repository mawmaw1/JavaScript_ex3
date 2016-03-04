/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    //  console.log("jQuery loaded");

//    $("#container").mouseenter(function () {
//
//        // console.log("Div was clicked!")
//        $(this).text("Entered");
//
//    });
//    $("#container").mouseleave(function () {
//
//        // console.log("Div was clicked!")
//        $(this).text("");
//
//    });



//$("#one").click(function (){
//   $(this).hide(); 
//});
//$("#two").mouseenter(function (){
//   $(this).css("border-width","4px");
//});
//$("#two").mouseleave(function (){
//   $(this).css("border-width","3px");
//});
//
//$("#two").click(function (){
//    
//   $("#three").css("font-size",22+"px"); 
//   
//});
//
//opgave 2
//$("#one").click(function (){
//   $(this).text(Math.pow(1,2));
//   
//});
//$("#two").click(function (){
//    $(this).text(Math.pow(2,2));
//   
//});
//$("#three").click(function (){
//    $(this).text(Math.pow(3,2));
//});
//$("#four").click(function (){
//    var text = $(this).text();
//   $(this).text(Math.pow(text,2));
//   
//});
//$("#five").click(function (){
//   $(this).text(Math.pow(5,2));
//});
//$("#six").click(function (){
//  $(this).text(Math.pow(6,2));
//});
//$("#seven").click(function (){
//   $(this).text(Math.pow(7,2));
//});
//$("#eight").click(function (){
//   $(this).text(Math.pow(8,2));
//});
//$("#nine").click(function (){
//   $(this).text(Math.pow(9,2));
//});
//
//$("li").filter(function (index){
//    return index % 2;
//}).css( "background-color", "lightgray" );
//
//
//
//$("li").each(function (index){
//    size = index;
//    return index;
//}).css( "font-size", size*2 );

//opgave 4



//   function swap(){
//      var arr = ["#one","#two","#three","#four"];
//      var first = Math.floor((Math.random() * 4) + 1);
//      var second = Math.floor((Math.random() * 4) + 1);
//      $(arr[first]).before($(arr[second]));
//   }
//
//    $("#one").click(function () {
//       swap();
//        
//    });
//        $("#two").click(function () {
//       swap();
//        
//    });
//    $("#three").click(function () {
//       swap();
//        
//    });
//    $("#four").click(function () {
//       swap();
//        
//    });
//    
//opgave 5

//    $("#name").blur(function () {
//        if ($("#name").val() === "") {
//            $("#name").val("Cannot be left empty").css("color", "red");
//        }
//
//    });
//    $("#pass").blur(function () {
//        if ($("#pass").val() === "") {
//            $("#pass").val("Must enter password").css("color", "red");
//        }
//
//    });

//OPGAVE 6

var stud1 = {firstName: "Per", lastName: "Mortensen", email: "per@per.dk"};
var stud5 = {firstName: "Kirstn", lastName: "Petersen", email: "kirs@kirs.dk"};
var stud2 = {firstName: "Mogens", lastName: "Mikkelsen", email: "mog@mog.dk"};


var studArray = [stud1, stud2, stud5];

var b = $('#table tbody');
tr = $("<tr></tr>").appendTo(b);
tr.append( "<td>blah</td><td>blah</td><td>blah</td>" );

});