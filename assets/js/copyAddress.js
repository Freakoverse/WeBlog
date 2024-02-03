document.addEventListener('DOMContentLoaded', function() {
  var copyButton = document.getElementById('copyAddress');
  var addressParagraph = document.getElementById('address');

  copyButton.addEventListener('click', function() {
    // Create a temporary textarea to copy the text to clipboard
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = addressParagraph.textContent;
    document.body.appendChild(tempTextarea);

    // Select the text and copy it to the clipboard
    tempTextarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Set the tooltip text
    copyButton.title = 'Copied!';
  });
});
