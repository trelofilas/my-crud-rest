$( document ).ready(function() {
  
  $("#deleteForm").submit(function(event){
    event.preventDefault();
    ajaxDelete();
  });
  
  function ajaxDelete(){
		  
		  var id = $("#id3").val();
		  
		  $.ajax({
			  type: "DELETE",
			  url: "api/user/" + id ,
			  success: function(xhr){
				  console.log(xhr.status);
				  $('#delResultDiv').html("<p>User with id: " + id + " has been deleted successfully!<p>");
			  },
			  error : function(xhr) {
				  alert("Error!");
				  console.log(xhr.status);
			  }
				  
		   });
			  
	}
		  
	$("#id3").val("");
	
});