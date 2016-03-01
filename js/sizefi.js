$(document).ready(function() {
   $("#file").change(function () { 
     var iSize = Math.round($("#file")[0].files[0].size / 1024); 
     if (iSize > 40 * 1024 * 1024) {
         alert('Tämä tiedosto ohittaa 40MB rajan, yritä toista.');
         location.reload();
     }    
  }); 
});
