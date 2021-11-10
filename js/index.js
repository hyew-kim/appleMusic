/*common*/
$(document).ready(function(){
	preventDefaultAnchor();
})

function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(event) {
    event.preventDefault();
  });
}