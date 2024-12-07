# Scavenger Hunt Backend

This backend system for a scavenger hunt game provides APIs to generate clues and themes based on user input, manage scavenger hunt themes, steps, and overall progress. It leverages MongoDB for data storage and the OpenAI API to generate creative and engaging scavenger hunt content.

## Features

- **Generate Clues:** Dynamically create clues for scavenger hunts based on theme, gift descriptions, and location details.
- **Manage Themes:** Create, retrieve, and manage themes that set the tone for scavenger hunts.
- **Scavenger Hunt Management:** Add steps and set the final gift location for a scavenger hunt.
- **RESTful API:** Expose endpoints for clues, hunts, and themes management.

## Technologies

- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web application framework for Node.js.
- **Mongoose:** MongoDB object modeling for Node.js.
- **OpenAI API:** Leverage AI to generate clues and themes.
- **dotenv:** Loads environment variables from `.env` file.
- **cors:** Enables CORS with various options.
- **helmet:** Helps secure Express apps by setting various HTTP headers.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB Atlas Account (or local MongoDB setup)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-repository/scavenger-hunt-backend.git
   cd scavenger-hunt-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
    - Rename the `.env.example` file to `.env`.
    - Update the `OPENAI_API_KEY` and `MONGODB_URI` with your credentials.

4. Start the server:
   ```
   npm start
   ```

## API Usage

The backend defines several routes under the `/api` prefix:

- **POST** `/api/clues/generate`: Generate a scavenger hunt clue.
- **POST** `/api/themes`: Add a new theme.
- **GET** `/api/themes`: Retrieve all themes.
- **POST** `/api/hunts`: Create a new scavenger hunt.
- **PUT** `/api/hunts/:huntId/steps`: Add a step to a scavenger hunt.
- **PUT** `/api/hunts/:huntId/final`: Set the final gift location.

## Development

### Testing

To run the test suite, execute:
```
npm test
```

### Linting

Ensure code quality and consistency with ESLint:
```
npm run lint
```

## License

See the [LICENSE.md](LICENSE.md) file for details.


## Acknowledgments

- **CS50 at Harvard University:** For inspiring the project's initiation and providing a foundational understanding of computer science principles.
- **ChatGPT and GitHub Copilot:** Utilized for coding assistance and to streamline the development process, enhancing the project's overall quality and efficiency.
- **Node.js Community:** For continuous support and libraries that enhanced the development process.
- **React Community:** For providing a robust ecosystem of tools and libraries that accelerated the development of the frontend application.
- **npm:** For managing project dependencies and enabling seamless integration of third-party packages.'
- **Material-UI Community:** For providing a rich set of components and design guidelines that helped in creating a visually appealing UI.
- **GitHub:** For hosting the project repository and facilitating collaboration among contributors.
- **React-to-Print:** For enabling the printing functionality within the application, allowing users to save and share their scavenger hunts easily.
- **OpenAI API:** Used for generating AI-powered clues, enhancing the scavenger hunt experience for users.
- **Google AdSense:** Integrated for monetization purposes, supporting the sustainability of the project.
```




