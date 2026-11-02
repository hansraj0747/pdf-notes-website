function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
    }

    function toggleAuth() {
      const popup = document.getElementById('auth-popup');
      popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    }

    function login() {
      const username = document.getElementById('login-username').value;
      alert(`Logging in as: ${username}`);
    }

    function register() {
      const email = document.getElementById('register-email').value;
      alert(`Registered with email: ${email}`);
    }

    window.onclick = function(e) {
      const popup = document.getElementById('auth-popup');
      if (!popup.contains(e.target) && !e.target.classList.contains('user-icon')) {
        popup.style.display = 'none';
      }
    }

    document.getElementById("pdf-upload").addEventListener("change", function (e) {
      var file = e.target.files[0];
      var fileURL = URL.createObjectURL(file);
      document.getElementById("pdf-frame").src = fileURL;
    })

    function openPDF() {
      window.open("pdfs/myfile.pdf", "_blank");
    }
