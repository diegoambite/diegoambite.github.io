$(document).ready(function() {

	$('.icons').hover(
		function() {
       		$(this).addClass("darker");
   		},
		function(){
			$(this).removeClass("darker");
		}
   	);

   	$('.data').hover(
		function() {
       		$(this).addClass("bigger");
   		},
		function(){
			$(this).removeClass("bigger");
		}
   	);

   	$('.cell').hover(
		function() {
       		$(this).addClass("light");
   		},
		function(){
			$(this).removeClass("light");
		}
   	);

   	$('#img1').hide();
   	$('#img2').hide();
   	$('#img3').hide();
   	$('#img4').hide();
   	$('#img5').hide();
   	$('#img6').hide();
   	$('#img7').hide();
   	$('#img8').hide();
   	$('#img9').hide();

   	$('#tex1').click(function() {
        $('#img1').show();
    });


   	$('#tex2').click(function() {
        $('#img2').show();
    });

    $('#tex3').click(function() {
        $('#img3').show();
    });

    $('#tex4').click(function() {
        $('#img4').show();
    });

    $('#tex5').click(function() {
        $('#img5').show();
    });

    $('#tex6').click(function() {
        $('#img6').show();
    });

    $('#tex7').click(function() {
        $('#img7').show();
    });

     $('#tex8').click(function() {
        $('#img8').show();
    });

    $('#tex9').click(function() {
        $('#img9').show();
    });

});

