const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "data", "invoice.json");
const filePath = require("./tasks.json");

const loadTasks = () => {
    try{
        const dataBuffer = fs.readFileSync(filePath);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch(error){
        return [];
    }
}

const saveTasks = (tasks) => {
    const JsonData = JSON.stringify(tasks);
    fs.writeFileSync(filePath, JsonData);
}
const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    // fs.writeFileSync(filePath, JSON.stringify(tasks));
    saveTasks(tasks);
    console.log("tasks added ", tasks);
}

const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task,index) => console.log('${index+1} - ${task.task}'));
};

const command = process.argv[2];
const argument = process.argv[3];

if(command === "add"){
    addTask(argument);
}
else if(command === "list"){
    loadTasks();
}else if(command === "remove"){
    removeTask(parseInt(argument));
}else{
    console.log("Invalid command");
}