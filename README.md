## My Project Deployment Link
[RP's Blog](https://rpcblog.netlify.app/)

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
6. [Usage](#usage)
    - [User Authentication](#user-authentication)
    - [Creating and Managing Posts](#creating-and-managing-posts)
7. [File Structure](#file-structure)
8. [Contributing](#contributing)

## Overview

This project is a full-featured blogging platform built with modern web technologies. Users can create, view, and manage blog posts, while also enjoying features like theme switching, user authentication, and a responsive design.

## Features

- **User Authentication**: Secure sign-up, login, and logout functionalities.
- **CRUD Operations**: Users can create, read, update, and delete blog posts.
- **Responsive Design**: A mobile-first design ensures compatibility across all devices.
- **Theme Switching**: Users can switch between light and dark themes for a better reading experience.
- **Rich Text Editor**: Enhanced post creation with a rich text editor for formatting content.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: State management for maintaining application state.
- **Appwrite**: Backend-as-a-service for authentication and database.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: Routing for navigating between different pages in the application.

## Installation

### Prerequisites

- Node.js and npm installed
- [Appwrite server set up](https://appwrite.io/docs/installation)

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/rp7007/BlogApp.git
    cd my-blog-project
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Appwrite:**
    - Follow the [Appwrite installation guide](https://appwrite.io/docs/installation) to set up your Appwrite server.
    - Create a new project in Appwrite and configure authentication and database services.
    - Update the Appwrite configuration in `src/appwrite/config.js` with your project details.

4. **Start the development server:**

    ```bash
    npm start
    ```

5. **Open your browser:**
    - Navigate to `http://localhost:3000` to view the application.

## Usage

### User Authentication

- **Sign Up**: Create a new account to start creating and managing blog posts.
- **Login**: Log in to your account to access personalized features.
- **Logout**: Securely log out from your account.

### Creating and Managing Posts

- **Create Post**: Use the rich text editor to create new blog posts with a title, content, and featured image.
- **View Posts**: Browse through all posts or view individual posts in detail.
- **Edit Post**: Update existing posts to keep your content current.
- **Delete Post**: Remove posts that are no longer needed.

## File Structure

```plaintext
my-blog-project/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── appwrite/
│   │   └── config.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── PostCard.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Profile.js
│   │   └── ...
│   ├── store/
│   │   └── authSlice.js
│   ├── ThemeContext.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Contributing
- Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
