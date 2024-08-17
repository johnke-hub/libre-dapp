<a id="readme-top"></a>
<br />
<div align="center">
  <h3 align="center">Decentralized Library System</h3>
  <p align="center">
    A decentralized application for uploading, borrowing, and managing digital books.
  </p>
</div>

## About
<p>
    The Decentralized Library System is a dApp powered by Cartesi Rollups technology.
</p>
<p>
    It allows users to upload and borrow digital books while ensuring secure access control and preventing unauthorized copying.
</p>

## Getting Started

Below you'll find instructions on how to set up this dApp locally.

### Prerequisites

Ensure you have the following packages installed on your PC:
* [Node.js](https://nodejs.org/en)
* [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install)
* [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
* [Docker](https://docs.docker.com/get-docker/)
* [Cartesi CLI](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/johnke-hub/libre-dapp
   ```

2. **Navigate to the Project Directory**
   ```sh
   cd libre-dapp
   ```

3. **Install the Required Dependencies**
   ```sh
   yarn
   ```

### Building the DApp

1. **Build the Cartesi Rollups Application**
   ```sh
   cartesi build
   ```

### Running the DApp

1. **Run a Local Cartesi Environment**
   ```sh
   cartesi run
   ```

2. **Interact with the DApp**
   Use the provided APIs to interact with the Decentralized Library System. Examples of APIs can be found in the `controllers` directory.

### License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Johnston Enken - [johnstoneken71@gmail.com](mailto:johnstoneken71@gmail.com) - [GitHub](https://github.com/johnke-hub)

<p align="right">(<a href="#readme-top">back to top</a>)</p>