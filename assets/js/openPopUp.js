//pop-up for relay
document.getElementById('OpenPopUpMainRelay').addEventListener('click', function() {
        document.getElementById('PopUpMainRelay').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('ClosePopUpMainRelay').addEventListener('click', function() {
        document.getElementById('PopUpMainRelay').style.display = 'none';
        document.body.style.overflow = 'auto';
    });



//pop-up for comment replies
    // Get all elements with the specified class
    var openButtons = document.querySelectorAll('.HBLCL_CAEReplies');

    // Add click event listeners to all elements with the specified class
    openButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            document.getElementById('PopUpMainCommentReplies').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    document.getElementById('ClosePopUpMainCommentReplies').addEventListener('click', function() {
        document.getElementById('PopUpMainCommentReplies').style.display = 'none';
        document.body.style.overflow = 'auto';
    });