//follow author button
document.addEventListener('DOMContentLoaded', function() {
      var followAuthorButton = document.getElementById('followAuthor');
      var targetElement = document.getElementById('followAuthor'); // Replace with the actual ID of the element you want to modify

      followAuthorButton.addEventListener('click', function() {
        // Toggle the class on the target element
        targetElement.classList.toggle('HBLA_AuthorNDetails_PPFBActive');

        // Toggle the text content of the button
        var buttonText = followAuthorButton.textContent.trim();
        followAuthorButton.textContent = buttonText === 'Follow' ? 'Followed' : 'Follow';
      });
    });

//follow author button
document.addEventListener('DOMContentLoaded', function() {
      var followAuthorButton = document.getElementById('followOwnerBtn');
      var targetElement = document.getElementById('followOwnerBtn'); // Replace with the actual ID of the element you want to modify

      followAuthorButton.addEventListener('click', function() {
        // Toggle the class on the target element
        targetElement.classList.toggle('HBSS_A_T_NLL_HBSSFActive');

        // Toggle the text content of the button
        var buttonText = followAuthorButton.textContent.trim();
        followAuthorButton.textContent = buttonText === 'Follow' ? 'Followed' : 'Follow';
      });
    });