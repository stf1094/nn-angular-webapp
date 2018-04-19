// Create a Stripe client.
var stripe = Stripe('pk_test_dzT3B5BUYZHcRHCdKatIAEmB');

(function() {
  "use strict";

  var elements = stripe.elements({
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: 'auto'
  });

    //Base style for the form fields
  var elementStyles = {
    base: {
      color: '#333',
      fontWeight: 400,
      fontSize: '15px',
      fontSmoothing: 'antialiased',

      '::placeholder': {
        color: '#999',
      },
      ':-webkit-autofill': {
        color: '#f7941d',
      },
    },
    invalid: {
      color: '#E25950',

      '::placeholder': {
        color: '#FFCCA5',
      },
    },
  };
    
    //Creating each card element
  var cardNumber = elements.create('cardNumber', {
      style: elementStyles,
  });
  cardNumber.mount('#example5-card-number');

  var cardExpiry = elements.create('cardExpiry', {
     style: elementStyles,
  });
  cardExpiry.mount('#example5-card-expiry');

  var cardCvc = elements.create('cardCvc', {
     style: elementStyles,
  });
  cardCvc.mount('#example5-card-cvc'); 
    
  var postalCode = elements.create('postalCode', {
     style: elementStyles,
  });
  postalCode.mount('#example5-zip'); 


  registerElements([cardNumber, cardExpiry, cardCvc, postalCode], "example5");


    
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(cardNumber).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      //stripeTokenHandler(result.token);
      console.log(result.token);
    }
  });
});
})();
