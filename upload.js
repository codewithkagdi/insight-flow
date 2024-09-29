document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const popupMenu = document.getElementById('popup-menu');
    const closePopup = document.getElementById('close-popup');
    const searchButton = document.getElementById('search-button');

    hamburger.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    });

    closePopup.addEventListener('click', () => {
        popupMenu.style.display = 'none';
    });
})

// Handle file upload
function uploadResource() {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    
    if (file) {
        // Display file in the uploaded files list
        const listItem = document.createElement('li');
        listItem.textContent = file.name;
        document.getElementById('uploaded-files-list').appendChild(listItem);

        // Clear upload status
        document.getElementById('upload-status').textContent = `Uploaded: ${file.name}`;
        fileInput.value = '';  // Reset the file input
    } else {
        document.getElementById('upload-status').textContent = 'Please select a file.';
    }
}

function uploadResource() {
    const fileInput = document.getElementById('file-upload');
    const uploadStatus = document.getElementById('upload-status');
    const uploadedFilesList = document.getElementById('uploaded-files-list');

    // Check if a file is selected
    if (fileInput.files.length === 0) {
        uploadStatus.textContent = "Please select a file to upload.";
        uploadStatus.style.color = "red";
        return;
    }

    // Get the selected file
    const file = fileInput.files[0];

    // Simulate file upload (you can replace this with actual upload logic)
    // Here, we will simply append the file name to the list and show success message
    const li = document.createElement('li');
    li.textContent = file.name;
    uploadedFilesList.appendChild(li);

    // Show success message
    uploadStatus.textContent = `Successfully uploaded: ${file.name}`;
    uploadStatus.style.color = "green";

    // Clear the file input for further uploads
    fileInput.value = '';
}
