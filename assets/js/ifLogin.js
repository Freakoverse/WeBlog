document.getElementById('loginChange').addEventListener('click', function() {
    var writersAndAdmin = document.getElementById('WritersAndAdmin');
    var ownerFollowLogin = document.getElementById('OwnerFollowLogin');
    var loginButton = document.getElementById('loginChange');

    if (writersAndAdmin.style.display === 'none') {
      writersAndAdmin.style.display = 'flex';
      ownerFollowLogin.style.display = 'none';
      loginButton.innerText = 'Logout';
    } else {
      writersAndAdmin.style.display = 'none';
      ownerFollowLogin.style.display = 'flex';
      loginButton.innerText = 'Login';
    }
  });