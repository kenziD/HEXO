function handler( event ) {
  var target = $( event.target );
 
  if ( target.is( $("#last-input-area"))  ) {
    $("#last-menu").show();
  }
  if ( target.is( $("#final-input-area"))  ) {
    $("#final-last-menu").show();
  }
  else{
      $("#last-menu").hide();
      $("#final-last-menu").show();
  }
}
$("html").click(handler);

$(".final-list-menu").click(function(e){
console.log(e.target.innerHTML);
 document.getElementById("final-input-area").value = e.target.innerHTML;
});