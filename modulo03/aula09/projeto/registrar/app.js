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



class Database {
    constructor() {
        const id = localStorage.getItem('id')
        
        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getTasks() {
        const tasks = Array()

        const id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
            const task = JSON.parse(localStorage.getItem(i))

            if (task === null) {
                continue
            }   

            task.id = tasks.push(task)
        }
        return tasks
    }

    createTask(task) {
        const id = getNextId()
        localStorage.setItem(id,JSON.stringify(task)) // stringify transforma o obj em uma str
        localStorage.setItem('id', id)
    }

    removeTask(id) {
        localStorage.removeItem(id)
    }

    searchTasks(task) {
        const filteredTasks = Array()

        filteredTasks = this.getTasks()

        if (!task.name) {
            filteredTasks = filteredTasks.filter(t => t.name === task.name)
        }
        if (!task.date) {
            filteredTasks = filteredTasks.filter(t => t.date === task.date)
        }
        if (!task.hour) {
            filteredTasks = filteredTasks.filter(t => t.hour === task.hour)
        }
        if (!task.description) {
            filteredTasks = filteredTasks.filter(t => t.description === task.description)
        }
        if (!task.resourses) {
            filteredTasks = filteredTasks.filter(t => t.resourses === task.resourses)
        }
    }
}

const database = new Database()

function getNextId() {
    const nextId = localStorage.getItem('id')
    return parseInt(nextId) + 1
}

function registerTask() {
    const name =            document.getElementById("nome").value
    const date =            document.getElementById("data").value
    const hour =            document.getElementById("horario").value
    const description =     document.getElementById("descricao").value
    const resourses =       document.getElementById("recursos").value

    const task = new Task(name, date, hour, description, resourses)

    if (task.validateData()) {
        database.createTask(task)
    }
}

function loadTasks() {

    if(tasks.length === 0) {
        tasks = database.getTasks()
    }


    

    const listTasks = document.getElementById('listTasks')

    tasks.forEach((t) => {
        const row = listTasks.insertRow()
        row.insertCell(0).innerHTML = t.name
        row.insertCell(1).innerHTML = t.date
        row.insertCell(2).innerHTML = t.hour
        row.insertCell(3).innerHTML = t.description
        row.insertCell(4).innerHTML = t.resourses
        
        const btn = document.createElement('button')
        btn.className = 'btn-delete'
        btn.innerHTML = 'Delete'
        btn.id = `id_task_${t.id}`
        btn.onclick = () => {
            const id = t.id
            database.removeTask(id)

            window.location.reload()
        }

        row.insertCell(5).append(btn)
    })
}

function searchTasks(task) {
    const name =            document.getElementById("nome").value
    const date =            document.getElementById("data").value
    const hour =            document.getElementById("horario").value
    const description =     document.getElementById("descricao").value
    const resourses =       document.getElementById("recursos").value

    const task = new Task(name, date, hour, description, resourses)

    const tasks = database.searchTasks()

    loadTasks(tasks)
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.body.contains(document.getElementById("listTasks"))) {
        loadTasks()
    }
})




