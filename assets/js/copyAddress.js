function copyToClipboard(buttonId, addressId) {
  var copyButton = document.getElementById(buttonId);
  var addressParagraph = document.getElementById(addressId);

  if (!copyButton || !addressParagraph) {
    console.error('Button or address element not found.');
    return;
  }

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
}

document.addEventListener('DOMContentLoaded', function() {
  copyToClipboard('copySiteOwnerAddress', 'SiteOwnerAddress');
  copyToClipboard('copyWriterAddress', 'WriterAddress');
});
