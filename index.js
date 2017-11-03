
/*
document.getElementById("myH1").innerHTML = "Hi";

// in jquery the above is the following...

$("#myH1").html("Hi JQuery! ");
$(".aBox").css("width", "100px");
$(".aBox").css("height", "100px");
$(".aBox").css("background", "gray");


console.log($(".aBox").css("background","gray"));



// var http = new XMLHttpRequest() { 





// jquery ajax
$.ajax({
  method: "GET",
  url: "https://assets.breatheco.de/json/project_list.php"
})
  .done(function( msg ) {
    //alert( "Data Saved: " + msg );
    console.log("JQUERRY: ");
    console.log(msg);
    $.each(msg, function(index, value){
        $(".aBox:first").html("<h2>"+value.name+"</h2>")
    });
  });
  
  */

$("#loadButton").click(ajaxCall);
$("#loadButton").click(lostButton);

function ajaxCall() {
    
    var ajax = new XMLHttpRequest();    
        ajax.open("GET", "https://assets.breatheco.de/json/project_list.php", true);
        ajax.addEventListener("load", ajaxArrives);
        ajax.send();
}

function ajaxArrives (event){
    var jsonObj = JSON.parse(event.target.response); //array of objects
    console.log(jsonObj);
    /*
    for (var prop in jsonObj) {
        document.getElementById("list").innerHTML +=    "<div class='card mt-2'>"+
                                                            "<img class='card-img-top' src='"+jsonObj[prop].thumb+"' alt='Card image cap'>"+
                                                            "<div class='card-body'>"+
                                                                "<h4 class='card-title'>"+jsonObj[prop].name+"</h4>"+
                                                                "<p class='card-text'>"+jsonObj[prop].description+"</p>"+
                                                            "</div>"+
                                                        "</div>";
    */
    
    $.each(jsonObj,function(i,value){
        
        console.log(jsonObj[i]);
        console.log(value);
        $("#list").html(    "<div class='card mt-2'>"+
                                                            "<img class='card-img-top' src='"+value.thumb+"' alt='Card image cap'>"+
                                                            "<div class='card-body'>"+
                                                                "<h4 class='card-title'>"+value.name+"</h4>"+
                                                                "<p class='card-text'>"+value.description+"</p>"+
                                                            "</div>"+
                                                        "</div>"
        )
    
        
    } )
        
    }


function lostButton (event) {
    
    document.getElementById("loadButton").style.display = 'block';
    
}