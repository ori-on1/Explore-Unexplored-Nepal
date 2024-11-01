# Explore Unexplored Nepal

**Explore Unexplored Nepal** is a web platform dedicated to promoting the lesser-known regions and hidden gems of Nepal. This project encourages exploration by sharing cultural insights, travel information, and local recommendations, helping users plan unique adventures off the beaten path.

![image](https://github.com/user-attachments/assets/c8ef9945-81b6-4129-a1b7-27ff6ede47e2)

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Nepal offers an abundance of natural beauty and cultural richness. However, many destinations remain unexplored by mainstream tourists. **Explore Unexplored Nepal** is a digital platform designed to shed light on these destinations, offering travel enthusiasts a chance to explore Nepal’s hidden spots and to learn about local traditions, festivals, and outdoor activities.

## Features

- **Unexplored Destinations**: Highlights unique locations across Nepal, including remote villages, scenic spots, and heritage sites.
- **Cultural Insights**: Showcases local festivals, customs, and stories related to each location.
- **Adventure Information**: Provides details about hiking trails, camping areas, and adventure sports.
- **Dynamic Data Loading**: Fetches data dynamically from `Data.json` to populate location details.
- **User-Friendly Design**: Designed to be intuitive and responsive on all device types.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (with Vite for development and bundling)
- **Backend/Static Data**: Data is provided via a JSON file (`Data.json`) for ease of access and management.
- **Configuration & Linting**: Vite for development and bundling, ESLint for maintaining code quality.

## Project Structure

Here’s an overview of the main files and folders in the repository:

```plaintext
Explore-Unexplored-Nepal/
│
├── src/                     # Source files for the project
├── .gitignore               # Git ignore file
├── Data.json                # JSON data for Nepal destinations and cultural insights
├── LICENSE                  # License information for the project
├── README.md                # Project documentation
├── eslint.config.js         # ESLint configuration for linting JavaScript files
├── index.html               # Main HTML file for the application
├── package-lock.json        # Dependency lockfile
├── package.json             # Project metadata and dependencies
└── vite.config.js           # Vite configuration file
```

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/prab33n/Explore-Unexplored-Nepal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Explore-Unexplored-Nepal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application in development mode:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser to view the app.

## Usage

- **Browse Destinations**: Explore various locations featured in the app, each with a brief description and travel tips.
- **Cultural Details**: Click on any destination to view more information about the cultural significance and highlights.
- **Responsive Viewing**: Access the platform from different devices for an optimized experience.

## Contributing

We welcome contributions to enhance this project. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes, ensuring code quality using ESLint.
4. Commit and push your branch.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

