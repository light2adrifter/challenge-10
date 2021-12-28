const questions ={
    employee: [
        {
            type: "input",
            name: "name",
            message: "What is their name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is their employee ID?",
        },

        {
            type: "input",
            name: "email",
            message: "What is their email?",
        },

        {
            type: "list",
            name: "position",
            message: "What is their position?",
            choices: ["Manager", "Engineer", "Intern"],
        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is their office number?",
            when: (answers) => answers.position === "Manager",
        },

        {
            type: "input",
            name: "github",
            message: "What is their GitHub?",
            when: (answers) => answers.position === "Engineer",
        },

        {
            type: "input",
            name: "school",
            message: "What is their school?",
            when: (answers) => answers.position === "Intern",
        },
    ]
};

module.exports=questions;