const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const inquirer = require("inquirer");


const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter your initials',
            name: 'initials',
            
        },
        {
            type: 'input',
            message: 'What color do you want your text?',
            name: 'color'
        },
        {
            type: 'list',
            message: 'What shape do you want your logo?',
            name: 'shape',
            choices: ["square", "circle", "triangle"],
        },
        {
            type: 'input',
            message: 'What color do you want your logo?',
            name: 'background',
        }
    ])
        .then((response) => {
            console.log(response);

            if (response.shape === 'square') {
                // create the svg for the square
                const square = new Square(response.initials, response.color, response.background)
                fs.writeFile('logo.svg', square.render() , (err) => {
                    err ? console.error(err) : console.log('File Created!')
                })

            } else if(response.shape === 'circle'){
                // create the svg for the circle
                const circle = new Circle(response.initials, response.color, response.background)
                fs.writeFile('logo.svg', circle.render() , (err) => {
                    err ? console.error(err) : console.log('File Created!')
                })
            } else if(response.shape === 'triangle') {
                // create the svg for the trianle
                const triangle = new Triangle(response.initials, response.color, response.background)
                fs.writeFile('logo.svg', triangle.render() , (err) => {
                    err ? console.error(err) : console.log('File Created')
                })
            }


            


        })
};

promptUser()
