# Stock Visualizer

## Description
This is a stock visualization tool that is built to help users visualize selective stocks in real time. This project pulls live data from online APIs and plots the data with the Plotly.js library.

## Install Instructions

Install Node.js

> *For Windows/Mac:* <br>
> Go to https://nodejs.org/en/download/ and download the appropriate file.
>
> *For Linux:* <br>
> Open the terminal and run the following commands:
>
> `sudo curl -sL https://deb.nodesource.com/setup_8.x -o setup.sh`<br>
> `sudo bash setup.sh`<br>
> `sudo apt-get install nodejs`<br>
> `sudo apt-get install build-essential`<br>
> `sudo apt-get install python-flask`<br>

Then download the project.

> Click the "Clone or Download" button above to download the project.

Setup npm

> `npm init`
> Enter any values that you want but can skip by pressing Enter

> `npm install`

Setup Webpack

> `npm i webpack --save-dev`
> `npm i webpack-dev-server --save-dev`

Setup React

> `npm i react --save-dev`

Setup Babel

> `npm i babel --save-dev`
> `npm i babel-core --save-dev`


Setup Flask (Backend)

> `sudo pip install flask`

> `sudo pip install requests`

> `sudo pip install sqlalchemy`

Starting up the website

> For the Frontend: `npm run start-dev`s
> For the Backend: `./run.sh`

## External References

- Plotly.js: https://github.com/plotly/plotly.js/
- Alpha Advantage: https://www.alphavantage.co/


## Setup for Windows

> To get pip for windows, download the file at https://bootstrap.pypa.io/get-pip.py
> To to the file location in cmd.exe and run `python get-pip.py --user`
> Add C:\\[python_folder_path]\\scripts to the system path
> Restart cmd.exe and for future pip installs, use `python -m pip [package_name]`