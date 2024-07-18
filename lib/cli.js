const inquirer = require('inquirer')

inquirer.prompt([{
    type: 'list', 
    name: 'TextColor',
    message: 'whats the color text?',
    choices: ['red', 'white', 'black']
}])

.then(answers => {
   console.log('Answer: ', answers)
})  
