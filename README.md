# MERN To-Do List & Thoughts App 🚀

## Thoughts for Loggerss 


## Project Description
This application is a full-stack MERN (MongoDB, Express.js, React, Node.js) single-page application designed to demonstrate collaborative development skills, problem-solving, and technical expertise. The project addresses a real-world challenge, offering a polished, responsive, and interactive user experience.

## Deployed Application

- **Live URL:** [https://p3-login-npx-react-vite.onrender.com]
- **GitHub Repository:** [https://github.com/HaroutHarryAltunyan/project3login]

## Features
- **Frontend:** Built using React to ensure a dynamic and responsive user interface.
- **Backend:** Powered by Node.js and Express.js with GraphQL API to handle queries and mutations.
- **Database:** MongoDB with Mongoose for efficient data management and secure storage.
- **Authentication:** JWT (JSON Web Tokens) for secure user authentication.
- **Interactivity:** Fully responsive design and user-friendly interactions.
- **Deployment:** Hosted on Render with MongoDB Atlas for a scalable, cloud-based solution.
- **Security:** API key and sensitive information securely handled on the server.

## User Story

```
AS A user,
I WANT a seamless application experience that lets me interact with real-world data securely and efficiently,
SO THAT I can achieve my goals effortlessly.
```

## Technologies Used
- **Frontend:**
  - React (Vite for fast development)
  - CSS-in-JS or Styled Components 
  - Apollo Client for GraphQL queries
  - Material-UI for UI components

- **Backend:**
  - Node.js
  - Express.js
  - GraphQL API

- **Database:**
  - MongoDB
  - Mongoose ODM

- **Authentication:**
  - JWT

- **Deployment:**
  - Render (with MongoDB Atlas)

## Installation
1. Clone the repository:
   ```bash
   git clone [git clone https://github.com/HaroutHarryAltunyan/p3-login-npx-react-vite.git]
   ```
2. Navigate to the project directory:
   ```bash
   cd [project-folder]
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGODB_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     NODE_ENV=development
     PORT=your-port-number
     ```
5. Start the development server:
   ```bash
   npm run Develop
   ```

## Features
✔️ User Authentication: Sign up and log in with JWT
✔️ Thoughts & Comments: Users can post thoughts and comment
✔️ To-Do List: Add, toggle, and delete tasks
✔️ GraphQL API: Built with Apollo Server

## Usage
1. Open the application in your browser at `http://localhost:[PORT]`.
2. Register or log in to access the features.
3. Interact with the user interface for CRUD operations.

## Screenshots
- 

![main login page ](./client/public/Screenshot%202025-01-29%20at%2011.26.47 PM.png)
![main login page ](./client/public/Screenshot%202025-01-30%20at%2012.57.52 AM.png)

## GraphQL Endpoints

Query
	•	users → Get all users
	•	user(username: String!) → Get user details
	•	thoughts → Fetch all thoughts
	•	getToDos → Fetch all to-do items
	•	me → Get logged-in user data

Mutations
	•	addUser(username, email, password) → Sign up
	•	login(email, password) → Authenticate user
	•	addThought(thoughtText) → Create a new thought
	•	addComment(thoughtId, commentText) → Add a comment
	•	addToDo(task) → Add a to-do item
	•	toggleToDo(id) → Mark a to-do as complete/incomplete
	•	deleteToDo(id) → Remove a to-do


## Project Structure

📂 p3-login-npx-react-vite
├── 📂 client/           # Front-end (React)
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── CommentForm
|   |   |   ├── CommentList
|   |   |   ├── Footer
|   |   |   ├── Header
│   │   │   ├── ThoughtList.jsx
│   │   │   ├── ThoughtForm.jsx
│   │   │   ├── ToDoList.jsx
│   │   ├──    pages/
|   |   |   |── ErrorPage.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
|   |   |   |     Profile.jsx
│   │   │   ├── Signup.jsx
|   |   |   |── SingleThought
│   │   ├── 📂 utils/
|   |   |   |── auth.js
│   │   │   ├── queries.js
│   │   │   ├── mutations.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
│
├── 📂 server/           # Back-end (Express + Apollo Server)
│   ├── 📂 config/
│   │   ├── connection.js
│   ├── 📂 models/
│   │   ├── User.js
│   │   ├── Thought.js
│   │   ├── ToDo.js
|  |    |── Users.js
│   ├── 📂 schemas/
|   |    |── index.js
│   │   ├── resolvers.js
│   │   ├── typeDefs.js
│   ├── 📂 utils/
│   │   ├── auth.js
|   |   |──dateFormat.js
│   ├── server.js
│   ├── package.json
│
├── .gitignore
├── README.md


## Deployment
	1.	MongoDB Atlas: Set up a cloud database
	2.	Render/Apollo: Deploy client and server
	3.	Update environment variables in your hosting service


## Future Enhancements
- Implement additional features such as:
  - Offline functionality using service workers.
  - Progressive Web App (PWA) compliance.
  - Enhanced UI/UX.
  - Integration with third-party APIs.
  - Dark mode UI with Material-UI
  - Email verification for user authentication
  - Drag-and-drop functionality for the To-Do list

## Presentation Highlights
- **Elevator Pitch:** A concise overview of the application’s purpose and functionality.
- **Concept:** Focus on user-centered design and solving real-world challenges.
- **Process:**
  - Collaboration and task management using [Insert tool, e.g., Trello, GitHub Projects].
  - Overcoming challenges such as [Insert specific challenges].
  - Successes include [Insert key successes].
- **Demo:** Showcase the application in action.
- **Future Development:** Highlight planned enhancements and scalability.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---
© 2024 edX Boot Camps LLC. All Rights Reserved.


