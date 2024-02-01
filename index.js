const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shape');




// Some function to render the text and shape on the 300x200 page








// Array of questions for user input for TEXT, TEXT COLOR, IMAGE AND IMAGE COLOR
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter Text: up to 3 characters'

    },

    {
        type: 'input',
        name: 'text-color',
        message: 'Enter a color hexcode or color keyword for the text color'

    },

    {
        type: 'input',
        name: 'shape-color',
        message: 'Enter a color hexcode or color keyword for the shape'
         
    },

    {
        type: 'list',
        name: 'image',
        message: 'Choose which Image you want',
        choices: ['Circle, Square, Triangle, Rectangle'],

    },
];



// Function to write data to file and log success
const writeFile = (fileName, data) => {

    // Message to tell us that the file writing process has starte
    console.log('Writing [' + data + '] to file [' + fileName + ']');

    // writing data Asynchronously
    fs.writeFile(fileName, data, function (err) {
        
        // Checks for error when writing file
        if (err) {
            // Logs the error and stops the process
            return console.log(err);
        }
        
        // If file write is successful, logs a positive message
        console.log('✨Success!✨ Enjoy your Logo 🎉')
    });
};

// Asynchronous declaration of the init function
const asyncInit = async () => {

    // Logs a message to indicate the start of initialization process
    console.log('Beginning Init')
    
    // Variable declared to store SVG string, initialized as empty
    let svgString = '';
    
    // Variable declared to store the file name, initialized as 'logo.svg'
    let svgFile = 'logo.svg';

    // Prompt the user to answer questions using Inquirer
    const answers = await inquirer.prompt(questions);








};


