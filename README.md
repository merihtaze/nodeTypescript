# Project Structure
This project is setup to let you develop a nodeJs app based on Express with Typescript.

It takes adventage of async / await mechanism and defines clear interfaces for resources to be fully async. 

The project structure is;

    .
    ├── dist                    # Compiled files
    │
    ├── public                  # Static files to serve
    │   ├── images              # Folder for static images
    │   ├── javascript          # Folder for static scripts
    │   └── stylesheets         # Folder for static stylesheets
    │
    ├── src
    │   ├── resources           # API Endpoints (A.K.A. controllers, handlers etc.)
    │   │   └── Welcome.ts      # Example handler for http://localhost:3000/welcome
    │   │
    │   ├── utils               # Utility classes for everyday operations
    │   │   ├── Database.ts     
    │   │   └── Logger.ts     
    │   ├── App.ts              # Entry method for the application
    │   └── Server.ts           # Main logic handler where all the setup is handled
    │
    ├── LICENSE
    ├── README.md
    ├── tsconfig.json           # Typescript compiler options
    └── tslint.json             # Linter configuration to keep the codebase clean

# Npm commands

' ```npm run lint``` ': Runs the linter

' ```npm run lintfix``` ': Runs and tries to auto fix linting errors

' ```npm start``` ': Starts typescript compiler and node file monitor


# LICENSE
[The MIT License](LICENSE.md)