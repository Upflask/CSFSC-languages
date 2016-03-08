$(document).ready(function() {
   $("#file").change(function () { 
     var iSize = Math.round($("#file")[0].files[0].size / 1024); 
     if (iSize > 40 * 1024 * 1024) {
         alert('Ова датотека је већа од 40MB, пробај неку другу.');
         location.reload();
     }    
  }); 
});
