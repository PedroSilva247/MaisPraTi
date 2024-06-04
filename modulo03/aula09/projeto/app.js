class Task {
    constructor(name, date, hour, description, resourses) {
        this.name = name
        this.date = date
        this.hour = hour
        this.description = description
        this.resourses = resourses
    }

    validateData() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === "") {
                return false
            }
        }
        return true
    }
}

function registerTask() {
    const name =            document.getElementById("nome").value
    const date =            document.getElementById("data").value
    const hour =            document.getElementById("horario").value
    const description =     document.getElementById("descricao").value
    const resourses =       document.getElementById("recursos").value

    const task = new Task(name, date, hour, description, resourses)
    if (task.validateData()) {
        Database.createTask(task)
    }
}




class Database {
    createTask(task) {
        localStorage.setItem(id,JSON.stringify(task))
    }
}