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


//pop-up for admin settings
document.getElementById('OpenPopUpMainAdminSettings').addEventListener('click', function() {
    togglePopUp('PopUpMainAdminSettings', 'open');
});

// Close button for relay
document.getElementById('ClosePopUpMainAdminSettings').addEventListener('click', function() {
    togglePopUp('PopUpMainAdminSettings', 'close');
});


//pop-up for write
document.getElementById('OpenPopUpMainWrite').addEventListener('click', function() {
    togglePopUp('PopUpMainWrite', 'open');
});

// Close button for relay
document.getElementById('ClosePopUpMainWrite').addEventListener('click', function() {
    togglePopUp('PopUpMainWrite', 'close');
});