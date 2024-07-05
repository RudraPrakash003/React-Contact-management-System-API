# Contact Management System

A simple React application to manage contacts using the JSONPlaceholder API. This application allows you to add, edit, and delete contacts. The styling is done using Tailwind CSS, and axios is used for making API requests.

## Demo
You can see the live demo [here](https://rudraprakash003.github.io/React-Contact-management-System-API/).

## Features

- Add new contacts
- Edit existing contacts
- Delete contacts

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/contact-management-system.git
   cd contact-management-system
   ```
2. Install dependencies:

   ```
   Copy code
   npm install
   ```

3. Install and configure Tailwind CSS:

   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. Install axios for making API requests:

   ```
   npm install axios
   ```

### Running the Application

1. Start the development server:

  ```
  npm start
  ```

2. Open your browser and navigate to http://localhost:3000.

## Usage
Usage
- Add Contact: Fill in the name, email, and phone fields and click the "Add Contact" button.
- Edit Contact: Click the "Edit" button next to a contact, update the fields, and click the "Update Contact" button.
- Delete Contact: Click the "Delete" button next to a contact to remove it.

## API Endpoints
This application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for testing purposes:

- GET: Fetch all contacts
  ```
  https://jsonplaceholder.typicode.com/users
  ```
- POST: Add a new contact
 ```
 https://jsonplaceholder.typicode.com/users
 ```
- PUT: Update an existing contact
 ```
 https://jsonplaceholder.typicode.com/users/{id}
 ```
- DELETE: Delete a contact
  ```
  https://jsonplaceholder.typicode.com/users/{id}
  ```
