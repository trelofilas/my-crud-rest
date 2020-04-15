$( document ).ready(function() {
  
    $("#registerForm").submit(function(event) {
    event.preventDefault();
    ajaxPost();
  });
    
    
    function ajaxPost(){
      
      var formData = {
        firstname : $("#firstname").val(),
        surname :  $("#surname").val(),
        gender : $('#gender').val(),
        birthdate : $('#birthdate').val(),
        home_address : $('#home_address').val(),
        work_address : $('#work_address').val()
        
      }

      $.ajax({
    	  type : "POST",
    	  contentType : "application/json",
    	  url : "api/user",
    	  data : JSON.stringify(formData),
    	  dataType : 'json',
    	  success : function (data, textStatus, xhr){
    		  $("#postResultDiv").html("<p>User Created Successfully</p>");
    		  console.log(xhr.status, data);
    	  },
    	  error : function(data, textStatus, xhr) {
    		  alert("Error!");
    		  console.log(data.responseText);
    	  }
      });
      
      resetData();
 
    }
    
    function resetData(){
    	$("#firstname").val("");
        $("#surname").val("");
        $('#gender').val("");
        $('#birthdate').val("");
        $('#home_address').val("");
        $('#work_address').val("");
    }
});