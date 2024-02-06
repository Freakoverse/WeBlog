// Function to handle opening and closing pop-ups
function togglePopUp(popUpId, action) {
    var popUpElement = document.getElementById(popUpId);

    if (popUpElement) {
        if (action === 'open') {
            popUpElement.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else if (action === 'close') {
            popUpElement.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

//pop-up for relay
document.getElementById('OpenPopUpMainRelay').addEventListener('click', function() {
    togglePopUp('PopUpMainRelay', 'open');
});

// Close button for relay
document.getElementById('ClosePopUpMainRelay').addEventListener('click', function() {
    togglePopUp('PopUpMainRelay', 'close');
});

//pop-up for comment replies
var openButtonsCommentReplies = document.querySelectorAll('.HBLCL_CAEReplies');
openButtonsCommentReplies.forEach(function(button, index) {
    button.addEventListener('click', function() {
        togglePopUp('PopUpMainCommentReplies', 'open');
    });

    // Close button for comment replies
    var closeButtonCommentReplies = document.getElementById('ClosePopUpMainCommentReplies-' + (index + 1));
    if (!closeButtonCommentReplies) {
        // If numbered version not found, try generic version
        closeButtonCommentReplies = document.getElementById('ClosePopUpMainCommentReplies');
    }

    if (closeButtonCommentReplies) {
        closeButtonCommentReplies.addEventListener('click', function() {
            togglePopUp('PopUpMainCommentReplies', 'close');
        });
    }
});


//pop-up for QR Site Owner
document.getElementById('siteOwnerOpenPopUpMainQR').addEventListener('click', function() {
    togglePopUp('PopUpMainQR', 'open');
});

// Close button for QR Site Owner
document.getElementById('ClosePopUpMainQR').addEventListener('click', function() {
    togglePopUp('PopUpMainQR', 'close');
});

//pop-up for QR Writer
document.getElementById('WriterPopUpMainQR').addEventListener('click', function() {
    togglePopUp('PopUpMainQR', 'open');
});

// Close button for QR Writer
document.getElementById('ClosePopUpMainQR').addEventListener('click', function() {
    togglePopUp('PopUpMainQR', 'close');
});
