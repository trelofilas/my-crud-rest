$( document ).ready(function() {
  
    $("#updateForm").submit(function(event) {
    event.preventDefault();
    ajaxUpdate();
  });
    
    
    function ajaxUpdate(){
 
      var formData = {
        id: $("#id").val(),
        firstname : $("#firstname2").val(),
        surname :  $("#surname2").val(),
        gender : $('#gender2').val(),
        birthdate : $('#birthdate2').val(),
        home_address : $('#home_address2').val(),
        work_address : $('#work_address2').val()
        
      }
      
      $.ajax({
    	  type : "POST",
    	  contentType : "application/json",
    	  url : "api/user",
    	  data : JSON.stringify(formData),
    	  dataType : 'json',
    	  success : function (data, textStatus, xhr){
    		  $("#updateResultDiv").html("<p>User Updated Successfully</p>");
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
    	$("#id2").val("");
    	$("#firstname2").val("");
        $("#surname2").val("");
        $('#gender2').val("");
        $('#birthdate22').val("");
        $('#home_address2').val("");
        $('#work_address2').val("");
    }
});