// functions imported from lib
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const render = require("./lib/htmlRenderer");
// modules required
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// where completed document is sent and saved as
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = [];

function runAgain() {
    // ask if they want to add more employees
    inquirer
        .prompt({
            type: "confirm",
            name: "again",
            message: "Would you like to add another employee?",
        })
        .then(function (addAnother) {
            // if they do, rerun questions
            if (addAnother.again == true) {
                init();
            }
            //   if not, render employees
            if (addAnother.again == false) {
                // render(employees);
                fs.writeFile(outputPath, render(employees), (err) =>
                    err ? console.log(err) : console.log(`Generated ${outputPath}`)
                );
            }
        });
}

function init() {
    // ask questions
    inquirer.prompt(questions.employee).then(function (answers) {
        //   create objects and push to the employees array
        if (answers.position == "Manager") {
            employees.push(
                new Manager(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.officeNumber
                )
            );
        }
        if (answers.position == "Intern") {
            employees.push(
                new Intern(answers.name, answers.id, answers.email, answers.school)
            );
        }
        if (answers.position == "Engineer") {
            employees.push(
                new Engineer(answers.name, answers.id, answers.email, answers.github)
            );
        }
        runAgain();
    });
}

init();