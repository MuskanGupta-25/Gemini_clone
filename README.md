Certainly! Here's the updated README file with instructions for setting up and running both backend and frontend, ensuring that running `npm install` in the backend directory installs dependencies for both parts of the project:

---

# Project Name

Brief description or introduction to your project.

## Table of Contents

1. [Installation](#installation)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
2. [Usage](#usage)
    - [Backend](#backend)
    - [Frontend](#frontend)
3. [Contributing](#contributing)
4. [License](#license)

## Installation

### Clone the Repository

To get started with the project, clone the repository to your local machine:

```bash
git clone https://github.com/MuskanGupta-25/Gemini_clone.git
cd <project-directory>
```

### Install Dependencies

Ensure you have Node.js installed on your machine (version 14 or later recommended). Then, navigate to the `backend` directory and run `npm install`:

```bash
cd backend
npm install
```

This command will install backend dependencies specified in `backend/package.json` and automatically install frontend dependencies located in the `frontend` directory due to the `postinstall` script.

## Usage

### Backend

To start the backend server:

```bash
# Assuming you are in the backend directory
npm run start
```

This command starts the backend server using `nodemon`, as configured in `backend/package.json`.

### Frontend

To start the frontend development server:

```bash
# Navigate to the frontend directory if not already there
cd ../frontend

# Run the development server
npm run dev
```

This command starts the frontend development server using `vite` or the tool configured in `frontend/package.json`.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. You can also open issues for feature requests or bug reports.

## License

This project is licensed under the [License Name] License - see the LICENSE.md file for details.

---

### Notes:
- Replace `https://github.com/MuskanGupta-25/Gemini_clone.git` with the actual URL of your Git repository.
- Adjust the Node.js version (`14` or later according to your needs) as per your project's requirements.
- Ensure your project structure matches the assumption (`backend` and `frontend` directories are siblings under `project-root`).
- This setup ensures that running `npm install` in the `backend` directory installs both backend and frontend dependencies automatically.
- Customize the README further based on your project's features, technologies used, and contribution guidelines.

This README provides clear instructions for cloning the repository, installing dependencies, and running both backend and frontend servers, facilitating smooth development and collaboration on your project.