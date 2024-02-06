document.getElementById('adminSettingsAddWritter').addEventListener('click', function () {
    // Get the div with the ID writersSettingsList
    var writersSettingsList = document.getElementById('writersSettingsList');

    // Create a new div with the specified HTML content
    var newElement = document.createElement('div');
    newElement.className = 'pUMCB_ASElement';
    newElement.innerHTML = `
    <div class="pUMCB_ASElementAddress"><input class="pUMCB_ASEAField" type="text" placeholder="Writer&#39;s public address" /></div>
    <div class="pUMCB_ASElementCheck"><input class="pUMCB_ASElementCheckBox" type="checkbox" /></div><a class="pUMCB_ASElementRemove" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
            <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"></path>
        </svg></a>
        `;

    // Append the new div to the writersSettingsList container
    writersSettingsList.appendChild(newElement);
});

// Add event listener to handle click events on the remove button
document.getElementById('writersSettingsList').addEventListener('click', function (event) {
    // Check if the clicked element has the class pUMCB_ASElementRemove
    if (event.target.classList.contains('pUMCB_ASElementRemove')) {
        // Remove the parent div of the clicked remove button
        var parentDiv = event.target.parentElement;
        parentDiv.remove();
    }
});