$(document).ready(function() {
   $("#file").change(function () 
   { 
     var ext = $('#file').val().split('.').pop().toLowerCase();
     if($.inArray(ext, ['png','jpg','jpeg','gif','webm','txt','mp4','wmv','mp3','ogg','zip','css','doc','docx','odt','pdf','ass']) == -1)
      {
    	alert('لا يسمح برفع ملفات بهذه الصيغة، رجاءاً راجع شروط الرفع.');
        location.reload();
} 
  }); 
});
