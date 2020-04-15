$( document ).ready(function() {
  
  $("#getId").submit(function(event){
    event.preventDefault();
    ajaxGetId();
  });
  
  function ajaxGetId(){
		  
		  var id = ("#id4").val();
		  
		  $.ajax({
			  type: "GET",
			  url: "api/user/" + id,
			  success: function(xhr){
				  if( xhr.status == 403){
					  console.log(xhr.status);
					  $('#delResultDiv').html("<p>User with id: " + id + " has been deleted successfully!<p>");
				  }
			  },
			  error : function(xhr) {
				  alert("Error!");
				  console.log(xhr.status);
			  }
				  
		  });
			  
	}
		  
  	$("#id3").val("");
		  
		  
});