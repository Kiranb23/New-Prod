# ACONEWS

ACONEWS is a responsive news application that fetches the latest news articles from the GNews API. The app features a sleek, user-friendly interface with search functionality, category filters, and pagination.

## Project Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase CLI installed globally.

### Frontend Setup

1. **Clone the repository**:
    ```bash
    git clone YOUR_GITHUB_REPO_URL
    cd aconews-frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase Hosting**:
    ```bash
    firebase init
    ```

4. **Build and deploy the frontend**:
    ```bash
    npm run build
    firebase deploy
    ```

### Backend Setup

1. **Navigate to the backend directory**:
    ```bash
    cd aconews-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase Functions (if using Firebase Functions)**:
    ```bash
    firebase init functions
    ```

4. **Deploy the backend**:
    ```bash
    firebase deploy --only functions
    ```

## Overview of Approach

1. **Frontend**:
    - Developed using React for its component-based structure and flexibility.
    - Implemented a responsive design using Bootstrap to ensure the app looks great on mobile, tablet, and desktop.
    - Created components for displaying news articles (`NewsCard`), pagination (`Pagination`), and search/filter functionality.

2. **Backend**:
    - Built with Node.js and Express to handle API requests.
    - Used Axios to fetch news articles from the GNews API.
    - Implemented pagination, search, and category filtering in the backend to manage the results efficiently.

3. **Deployment**:
    - Hosted the frontend on Firebase Hosting for easy deployment and scalability.
    - Hosted the backend on Firebase Functions for seamless integration with the frontend.

## Challenges and Solutions

1. **Pagination Issues**:
    - **Challenge**: Ensuring the pagination worked correctly and fetched the right set of articles for each page.
    - **Solution**: Implemented pagination logic in both the frontend and backend, and used query parameters to manage the current page state.

2. **Responsive Design**:
    - **Challenge**: Making sure the app looked good on all devices.
    - **Solution**: Used Bootstrap for a responsive grid system and tested the layout on various devices using Chrome DevTools.

3. **API Rate Limits**:
    - **Challenge**: Handling the rate limits imposed by the GNews API.
    - **Solution**: Implemented error handling to manage API rate limits and provided feedback to users when the limit was reached.

4. **Deployment**:
    - **Challenge**: Deploying both the frontend and backend seamlessly.
    - **Solution**: Used Firebase Hosting for the frontend and Firebase Functions for the backend, ensuring smooth deployment and integration.

## Conclusion

ACONEWS is a robust and responsive news application that provides users with the latest news articles from around the world. The project showcases the use of React for the frontend, Node.js/Express for the backend, and Firebase for hosting and deployment.
