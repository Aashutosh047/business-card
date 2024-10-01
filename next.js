document.querySelectorAll('.next-but').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();  // Prevent default button behavior
  
      // Add the slide-out animation to the body
      document.body.classList.add('slide-out');
  
      // Get the target URL from the button's parent anchor tag
      const targetUrl = this.parentElement.getAttribute('href');
  
      // Redirect to the next page after the animation
      setTimeout(function() {
        window.location.href = targetUrl;
      }, 500);  // Match the animation duration in milliseconds
    });
  });