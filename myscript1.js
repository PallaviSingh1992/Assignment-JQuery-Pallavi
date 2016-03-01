
function change1(){
    document.getElementById("uID").innerHTML=document.getElementById("uniqueID").value
}

function change2(){
    document.getElementById("uname").innerHTML=document.getElementById("name").value
}

function change3(){
    document.getElementById("uemail").innerHTML=document.getElementById("email").value
} 
/*function slideleft(){
    $("#One").click(function(){ 
         var div = $("div");  
         div.animate({left:'200px'},"slow")
    });
}

function slideright(){
     $("#Two").click(function(){
        var div = $("div");  
        div.animate({right: '200px'}, "slow");
    });
      
}*/
$(document).ready(function(){
    $("#btnGetAll").click(function(){
      //  $('#tbl').hide();
        $.post("http://localhost:9000/student/all", function(data, status){
            $('#newtbl').empty();
             $('#newtbl').append("<tr><td>"+"ID:"+"</td><td>"+"NAME"+"</td><td>"+"EMAIL"+"</td></tr>")
            for(i=0; i<=data.length;i++){
             $('#newtbl').append("<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].email+"</td></tr>")
           
           // alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
       }
        $('#tbl').show();
        });
    });
});
$(document).ready(function(){
    $("#btnGet").click(function(){
         var tempId=$('#uniqueID').val();
         $('#tbl').show();
        $.get("http://localhost:9000/student/1", function(data, status){
          if(tempId==data.id)
          {
             document.getElementById("uID").innerHTML=data.id;
              document.getElementById("uname").innerHTML=data.name;
               document.getElementById("uemail").innerHTML=data.email;
                    //alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
          }
            
        });
    });
});
$(document).ready(function(){
    $("#btnSave").click(function(){

    	var id=parseInt($('#uniqueID').val());
    	var name=$('#name').val();
    	var email=$('#email').val();
    	$.ajax({
    		url: "http://localhost:9000/student/save",
              type: "POST",
              data: JSON.stringify({"id":id,"name":name,"email":email}),
              contentType: "application/json",
              dataType: "json",
              success: function(data, status){ alert(data+" ; "+status)}
    	});
   
     //   $.post("http://localhost:9000/student/all", function(data, status){
       //     alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);*/
        });
    });
});


