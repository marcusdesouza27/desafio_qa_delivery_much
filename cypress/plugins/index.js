/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// webpack.config.js

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename:'bundle.js'
    }, 
    mode:'development'  
};

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};