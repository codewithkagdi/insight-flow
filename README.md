# insight-flow



Here’s a detailed README file for your project **Insight Flow**:

---

# Insight Flow

## Project Overview

**Insight Flow** is an e-library platform that allows users to upload, search, and bookmark educational resources. The platform is designed to promote collaborative learning by enabling users to share study materials and receive community feedback.

### Key Features:
- **File Upload**: Users can upload educational resources directly to the platform.
- **Search Functionality**: Search for study materials using tags, subjects, or titles.
- **Bookmarks**: Save frequently accessed resources for easy retrieval.
- **Community Feedback**: Rate and provide feedback on uploaded materials.

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Setup Instructions](#setup-instructions)
3. [Features](#features)
   - [File Upload](#file-upload)
   - [Search Resources](#search-resources)
   - [Bookmarks](#bookmarks)
   - [Feedback](#feedback)
4. [File Structure](#file-structure)
5. [Contributing](#contributing)
6. [License](#license)

---

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **FontAwesome**: For icons and visual design elements
- **LocalStorage**: For saving theme preferences and bookmarks

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/insight-flow.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd insight-flow
   ```
3. **Open the project in your browser**:
   Simply open `index.html` in any web browser.

4. **Theme Preferences**:
   Your theme preference (light or dark mode) is saved using `localStorage`. Toggle the theme using the sun/moon icon at the top right of the navbar.

---

## Features

### File Upload

Insight Flow allows users to upload files directly through the upload section. The uploaded files are stored in the browser for easy access and sharing.

**How it works:**
- Users select a file via the file input field.
- The `uploadResource()` function handles file selection and simulates an upload process using a `FormData` object.
- Upon successful upload, the file name is displayed in a list below the upload section.

**Snippet**:
```html
<section id="upload">
    <h2>Upload Study Material</h2>
    <input type="file" id="file-upload" />
    <button onclick="uploadResource()">Upload</button>
    <div id="upload-status"></div>
    <h3>Uploaded Files:</h3>
    <ul id="uploaded-files-list"></ul>
</section>
```

### Search Resources

The search functionality allows users to search for resources using keywords. Results are dynamically filtered from a predefined array of resource titles.

**Key points**:
- Input field for entering search queries.
- `searchResources()` filters results and displays them in a list.
- Results are dynamically rendered below the search bar.

### Bookmarks

Bookmark any resource for quick access later. Bookmarked items are listed in a dedicated section with the option to remove them.

- Each bookmarked resource has a "Remove" button to delete the entry.
- Bookmarks are saved using `localStorage`.

### Feedback

Users can provide feedback and rate the platform's resources using the feedback section. Feedback is displayed as a thank-you message, simulating submission.

**Key points**:
- Star rating (1-5).
- Text area for detailed feedback.
- The submission is processed and acknowledged using a confirmation message.

---

## File Structure

```bash
Insight-Flow/
│
├── index.html       # The main HTML file
├── style.css        # Custom styles for the website
├── script.js        # JavaScript functionality
└── README.md        # This readme file
```

- **index.html**: Contains the structure of the webpage, including sections for uploading files, searching resources, displaying bookmarks, and submitting feedback.
- **style.css**: Handles the visual design of the platform, including light/dark mode styling and responsive layout adjustments.
- **script.js**: Contains the core logic for uploading files, searching, and interacting with local storage.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes.
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch.
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

By following this guide, you should be able to understand the purpose and functionality of Insight Flow, set it up locally, and contribute to its development.
