$(document).ready(function() {
   $("#file").change(function () { 
     var iSize = Math.round($("#file")[0].files[0].size / 1024); 
     if (iSize * 1024 * 1024 > 40 * 1024 * 1024) {
         alert('Diese Datei ist über dem 40MB Limit, versuche es mit einer anderen Datei.');
         location.reload();
     }    
  }); 
});
