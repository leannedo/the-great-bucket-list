# Stepout Backend Intern Assignment

You will have 14 days to complete your assignment. Please notify us when you are done with the tasks. Send an email to dev@stepout.fi when you are done or if you have any questions. Happy coding and good luck!

## Installation and Setup


```bash
# Install dependencies for server
npm install

# Run the application
npm run start

# Server runs on http://localhost:3000 
```

## Assignment Instruction

* The solution should be made within this expressJS application.
* You can clone or fork the project. 
* Use [/models/todo.js](./models/todo.js) for your Rest API data.
* You are free to structure your Express JS application on how you like.
* Your todos route must be `api/todos`.

## Task

1. CRUD Restful API on route `/api/todos` for todo app:

    * The application should be able to get all todos from [todo.js](./models/todo.js).
    * The application should be able to add todo into [todo.js](./models/todo.js).
    * The application should be able to update a todo info in [todo.js](./models/todo.js).
    * The application should be able to remove a todo from [todo.js](./models/todo.js).

2. Filter:

    * Create an API route where the application will show only complete todo.
    * Create an API route where the application will show the todos on a aphabetical order of todos name.
    * Create an API route where the application will show the todos on a reverse aphabetical order of todos name. 

3. Search:

    * Modify your [todo.js](./models/todo.js) so that you can have a description for each todo.
    * Your CRUD API should be able to work normally after the modification.
    * Create an API route that will search for a todo based on the description.


## Tip

* Stepout team loves clean code and would love to see your consideration on readability and performance.
* We love good test case if possible.
* We love to learn about your development through a README
