
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);

  $(document).ready(function() {
    // Your existing code
  
    // Add the new code below
  
    // Display existing addresses and choose an existing address
    const existingAddresses = [
      { id: 1, address: 'Address 1' },
      { id: 2, address: 'Address 2' },
      { id: 3, address: 'Address 3' }
    ];
  
    function displayExistingAddresses() {
      const addressesContainer = $('#existing-addresses');
      addressesContainer.empty();
  
      existingAddresses.forEach(address => {
        const addressElement = $('<div>')
          .addClass('address-item')
          .text(address.address);
  
        addressesContainer.append(addressElement);
      });
    }
  
    $('#choose-existing-address').on('click', function() {
      // Handle choosing an existing address here
      console.log('Choose Existing Address button clicked');
    });
  
    displayExistingAddresses();
  
    // Confirm order button
    $('#confirm-order').on('click', function() {
      // Handle confirming the order here
      console.log('Confirm Order button clicked');
    });
  });

  document.getElementById('address-form').style.display = 'block';

  document.getElementById('choose-existing-address').addEventListener('click', function() {
    // Show the address form and hide the button
    document.getElementById('address-form').style.display = 'block';
    this.style.display = 'none';
});


(function ($) {
  
  "use strict";

  // PRE LOADER
  $(window).load(function(){
    $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
  });

  // NAVBAR
  $(".navbar").headroom();

  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  $('.slick-slideshow').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    dots: true,
  });

  $('.slick-testimonial').slick({
    arrows: false,
    dots: true,
  });

})(window.jQuery);

$(document).ready(function() {
  // Your existing code

  // Add the new code below

  // Display existing addresses and choose an existing address
  const existingAddresses = [
    { id: 1, address: 'Address 1' },
    { id: 2, address: 'Address 2' },
    { id: 3, address: 'Address 3' }
  ];

  function displayExistingAddresses() {
    const addressesContainer = $('#existing-addresses');
    addressesContainer.empty();

    existingAddresses.forEach(address => {
      const addressElement = $('<div>')
        .addClass('address-item')
        .text(address.address);

      addressesContainer.append(addressElement);
    });
  }

  $('#choose-existing-address').on('click', function() {
    // Handle choosing an existing address here
    console.log('Choose Existing Address button clicked');
  });

  displayExistingAddresses();

  // Confirm order button
  $('#confirm-order').on('click', function() {
    // Handle confirming the order here
    console.log('Confirm Order button clicked');
  });

  // Show address form when choosing existing address
  document.getElementById('choose-existing-address').addEventListener('click', function() {
    // Show the address form and hide the button
    document.getElementById('address-form').style.display = 'block';
    this.style.display = 'none';
  });
  
  // Display the address form after the document has fully loaded
  document.getElementById('address-form').style.display = 'block';
});

$(document).ready(function() {
  // Handle change event of the location dropdown
  $('#location').on('change', function() {
      var selectedLocation = $(this).val();
      if (selectedLocation === 'js/map.html') {
          // Redirect to the map page
          window.location.href = selectedLocation;
      }
  });
});
