$( document ).ready(function() {
  
  $("#getAllCustomerId").click(function(event){
    event.preventDefault();
    ajaxGet();
  });
  
  function ajaxGet(){
    $.ajax({
      type : "GET",
      url : "api/user",
      success: function(data, textStatus, xhr){
    	console.log(data)
        if(xhr.status == 200){
          $('#getResultDiv').empty();
          openTable = "<tr><th>id</th>" +
          		"<th>Firstname</th>" +
          		"<th>Surname</th>" +
          		"<th>Gender</th>" +
          		"<th>Birthdate</th>" +
          		"<th>Home Address</th>" +
          		"<th>Work Address</th></tr>";
          $('#getResultDiv').append(openTable);
    	  
          $.each(data, function(i, user){
            var user = "<tr><td>" + data[i].id + "</td><td>" + 
            			data[i].firstname + "</td><td>" + 
            			data[i].surname + "</td><td>" +
            			data[i].gender + "</td><td>" +
            			data[i].birthdate + "</td><td>" +
            			data[i].home_address + "</td><td>" +
            			data[i].work_address + "</td></tr>"; 
             $('#getResultDiv').append(user);
          });
          console.log(xhr.status);
        }else{
          $("#getResultDiv").html("<strong>Error</strong>");
          console.log(data);
        }
      },
      error : function(e) {
        $("#getResultDiv").html("<strong>Error</strong>");
        console.log("ERROR: ", e);
      }
    });  
  }
  
})