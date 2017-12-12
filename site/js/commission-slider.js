$(document).ready(function() {
          $("#slider").slider({
              animate: "fast",
              value:1,
              min: 1,
              max: 10,
              step: 1,
              slide: function(event, ui) {
                  update(1,ui.value); //changed
              }
          });

          $("#slider2").slider({
              animate: true,
              value:1,
              min: 1,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(2,ui.value); //changed
              }
          });

          //Added, set initial value.
          $("#referrals").val(1);
          $("#levels").val(1);
          $("#referrals-label").text(1);
          $("#levels-label").text(1);
          
          update();
      });

      //changed. now with parameter
      function update(slider,val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $referrals = slider == 1?val:$("#referrals").val();
        var $levels = slider == 2?val:$("#levels").val();
        var subTotal = 0;  // added these for calculations
        var finTotal = 0;

        /* commented
        $referrals = $( "#slider" ).slider( "value" );
        $levels = $( "#slider2" ).slider( "value" );
         */
          
         for (var i = 1; i <= $levels; i++) {  
           subTotal = Math.pow($referrals, i);  
           subTotal = subTotal * 5;
           finTotal = finTotal + subTotal;
         }

         $total = "$" + finTotal; 
          
         $( "#referrals" ).val($referrals);
         $( "#referrals-label" ).text($referrals);
         $( "#levels" ).val($levels);
         $( "#levels-label" ).text($levels);
         $( "#total" ).val($total);
         $( "#total-label" ).text($total);

          $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$referrals+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$levels+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
      }