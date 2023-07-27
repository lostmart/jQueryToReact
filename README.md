# jQueryToReact

## Introduction and Overview:

This repository contains a project based on a site made using jQuery and recreated using React 18.2.0.
It alse features a personalized NPM pack for a modal called `modal-package-martin-test` you can find its NPM package here: [https://www.npmjs.com/package/modal-package-martin-test](https://www.npmjs.com/package/modal-package-martin-test)

## Installation and Getting Started:

To get started with the migration process, follow these steps:

- Clone the repository: git clone https://github.com/lostmart/jQueryToReact.git
- Navigate to the repository: cd jQueryToReact

## Project Setup and Dependencies:

This project uses the principles of Atomic Design as an experimental tendency even though it's a small project daoes not necessarily need such a deep division of parts.

## Architecture and Components:

    ├── public                      # Public folder
    ├── src                         # Redux Store inside
        ├── app                     # Redux Store inside
        ├── assets                  # Images and css files
        ├── components              # Tools and utilities
            ├── atoms               # Minimal UI part (input, button, label, etc)
            ├── molecules           # Small group of atoms
            ├── organisms           # Parts of pages (Forms, Modal, etc)
        ├── data                    # Data for the 50 States and 43 random users mock data
        ├── features                # Redux slices
        ├── pages                   # App pages handled with react-router
        ├── utils                   # formatting helper functions (dataSorter and dataFormatter )
    └── README.md

## Deployed version

[here](https://main--zesty-moonbeam-928dd0.netlify.app/)

## State Management:

The project uses [Redux](https://react-redux.js.org/) for general state management. It also import 42 users randomly generated in order to show/test the functionality of the table and its filters.

## Lincese

This project is licensed under the [MIT License](https://opensource.org/license/mit/)
