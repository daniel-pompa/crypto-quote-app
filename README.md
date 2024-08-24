# Crypto Quote App

Crypto Quote is a React-based application designed to provide real-time cryptocurrency quotes through the CryptoCompare API. This user-friendly platform offers a comprehensive summary of cryptocurrency data, including the current price, the highest and lowest prices of the day, the 24-hour price variation, and the most recent update time.

## Table of Contents

1. [Requirements](#requirements)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Demo](#demo)
7. [Contributing](#contributing)
8. [License](#license)
9. [Author](#author)
10. [Acknowledgements](#acknowledgements)

## Requirements

You need to have the following installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or any other editor of your choice.

[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

> [!NOTE]
> Clicking on the Node.js badge will take you to the Node.js website, where you can download the installer. It is recommended to use the stable version. When you install Node.js, npm will be installed automatically.

Check your Node.js and npm installation by running:

```bash
node --version
npm --version
```

## Technology Stack

The project utilizes the following technologies:

<div>
  <img src="https://skillicons.dev/icons?i=vite" alt="Vite" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=react" alt="React" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=html" alt="HTML5" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=css" alt="CSS3" width="40" height="40" />
</div>

In addition to these technologies, the application also employs Zod for precise validation of API responses and Zustand for effective global state management, enhancing both the reliability and performance of the application.

## Project Structure

```bash
├───📁 public/
├───📁 src/
│   ├───📁 assets/
│   │   ├───📁 css/
│   │   └───📁 fonts/
│   ├───📁 components/
│   ├───📁 data/
│   ├───📁 schema/
│   ├───📁 services/
│   ├───📁 types/
│   ├───📄 App.tsx
│   ├───📄 index.css
│   ├───📄 main.tsx
│   ├───📄 store.ts
│   └───📄 vite-env.d.ts
├───📄 eslint.config.js
├───📄 index.html
├───📄 package-lock.json
├───📄 package.json
├───📄 README.md
├───📄 tsconfig.app.json
├───📄 tsconfig.json
├───📄 tsconfig.node.json
└───📄 vite.config.ts
```

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/daniel-pompa/crypto-quote-app.git
```

2. **Navigate to the project directory:**

```bash
cd crypto-quote-app
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the development server:**

```bash
npm run dev
```

> [!NOTE]
> The server will typically run on <http://localhost:5173>, but check the output on your terminal to be sure.

## Usage

Once the development server is running, you can open your browser and navigate to <http://localhost:5173> to view the application.

To get a cryptocurrency quote:

1. Select the currency for which you want to obtain the quote.
2. Choose the cryptocurrency you wish to quote.
3. Click the `Quote` button.

The application will display a summary of the quote, including the current price, the highest and lowest prices of the day, the 24-hour price variation, and the time of the last update.

## Demo

Explore the live demo of the application at the following link:

<!-- TODO: Add the link to the deployed application on Vercel or Netlify once it is complete. -->

Discover the features live and see the app in action!

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

> [!NOTE]
> Clicking on the MIT License badge for see the LICENSE file for details.

## Author

This project is maintained and developed by **Daniel Pompa Pareja**.

## Acknowledgements

Special thanks to the developers and contributors of:

- **[Vite](https://vitejs.dev/)** for the fast and modern build tool.
- **[React](https://es.react.dev/)** for the powerful UI library.

I would also like to extend my sincere gratitude to:

- **[Node.js](https://nodejs.org/en)** for offering a powerful and efficient runtime environment for JavaScript.
- **[npm](https://www.npmjs.com/)** for being a crucial tool in managing project dependencies and packages.
- **[Skillicons](https://skillicons.dev/)** for high-quality icons that enhance the visual appeal of this project.
- **[CryptoCompare](https://www.cryptocompare.com/)** for providing comprehensive and real-time cryptocurrency data through their API.
- **[Zod](https://zod.dev/)** for its robust schema validation capabilities that ensure data accuracy.
- **[Zustand](https://github.com/pmndrs/zustand)** for its efficient state management solution.
- **Open Source Community** for the countless resources, tutorials, and tools available that have supported our learning journey.

[Back to Top](#table-of-contents)
