
  

  

  // Toggle between login and signup form
  document.getElementById('signup-link').addEventListener('click', function() {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('signup-form').style.display = 'block';
  });

  document.getElementById('login-link').addEventListener('click', function() {
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('signup-form').style.display = 'none';
  });

  // Login form validation
  document.getElementById('login-form-element').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      // Validate inputs
      if (username === '' || password === '') {
          alert('Both fields are required');
      }else {
          alert('Login successful!');
          // Add your login logic here (e.g., send data to the server)
      }
  });

  // Sign-up form validation
  document.getElementById('signup-form-element').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      const username = document.getElementById('signup-username').value;
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      // Validate inputs
      if (username === '' || password === '' || confirmPassword === '') {
          alert('All fields are required');
      } else if (password !== confirmPassword) {
          alert('Passwords do not match');
      } else {
          alert('Sign up successful!');
          // Add your sign-up logic here (e.g., send data to the server)
      }
  });
