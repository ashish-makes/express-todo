
# Todo CRUD App with Google OAuth Authentication

This is a simple Todo application built with **Express.js**, **MongoDB**, **Passport.js** for Google OAuth authentication, and **Handlebars** for the view engine. Users can sign in using their Google account and manage their todos securely.

## Features
- Google OAuth login using Passport.js
- View, add, delete todos
- User-specific todo lists (each user sees only their todos)
- Responsive Handlebars-based UI

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** (using Mongoose for ORM)
- **Passport.js** (for Google OAuth authentication)
- **Handlebars** (view engine)

## Screenshots
![image](https://github.com/user-attachments/assets/22c17ad8-59fd-4a27-884c-12293b6e1d0e)

![image](https://github.com/user-attachments/assets/1e7d0bd2-cbb0-43f5-b1a5-266454d7a8e7)

![image](https://github.com/user-attachments/assets/59b395fc-4f4c-476c-acf7-d349ce7fb999)

![image](https://github.com/user-attachments/assets/3241d9e5-7e7e-41ad-920e-6e5fc561a1c0)

## Requirements

- [Node.js](https://nodejs.org/)
- MongoDB (locally or using a cloud-based solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/express-todo.git
    cd express-todo
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following environment variables:

    ```env
    SESSION_SECRET=your-session-secret
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    MONGODB_URI=mongodb://localhost:27017/todoapp
    ```

    - Replace `your-session-secret` with a random string.
    - You can get the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` by setting up a project in the [Google Developer Console](https://console.developers.google.com/).

4. Set up MongoDB:
    - If you have MongoDB installed locally, ensure it’s running. Otherwise, you can use a MongoDB service like MongoDB Atlas and update your `.env` file with the provided connection string.

## Running the Application

To run the application, use the following command:

```bash
npm start
```

The application will run on `http://localhost:3000`.

## Routes

- **GET `/`**: Home page (Redirects to `/todos` after login).
- **GET `/login`**: Login page (Uses Google OAuth).
- **GET `/todos`**: View your todos (Protected route).
- **POST `/todos`**: Add a new todo.
- **POST `/todos/:id/delete`**: Delete a todo.
- **GET `/logout`**: Logout from Google and the application.

## Authentication

Users must log in with their Google account. Upon successful login, the user will be redirected to their todo list, where they can manage their todos. The application uses **session-based** authentication, and only authenticated users can access the `/todos` routes.

## Directory Structure

```
.
todo-app
├── models
│   ├── User.js
│   └── Todo.js
├── routes
│   ├── auth.js
│   └── todo.js
├── views
│   ├── layouts
│   │   └── main.hbs
│   ├── home.hbs
│   ├── login.hbs
│   ├── register.hbs
│   └── todos.hbs
├── .env
├── app.js
├── package.json
└── README.md

```

## Contributing

Feel free to fork this project and submit pull requests. Contributions are always welcome!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
