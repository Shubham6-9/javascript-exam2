document.getElementById("add").addEventListener('click', () => {
    document.getElementById("add-task-box").style.display = "block"
})
document.getElementById("close").addEventListener('click', () => {
    document.getElementById("add-task-box").style.display = "none"
})

let title = document.getElementById("title")
let des = document.getElementById("des")
let due = document.getElementById("due")
let pri = document.getElementById("pri")
document.getElementById("add-task-form").addEventListener('submit', (e) => {
    e.preventDefault()
    if (title.value == "") {
        document.getElementById("title-err").style.display = "block"
    } else {
        document.getElementById("title-err").style.display = "none"
        if (des.value == "") {
            document.getElementById("des-err").style.display = "block"
        } else {
            document.getElementById("des-err").style.display = "none"
            if (due.value == "") {
                document.getElementById("due-err").style.display = "block"
            } else {
                document.getElementById("due-err").style.display = "none"
                if (pri == "") {
                    document.getElementById("pri-err").style.display = "block"
                } else {
                    document.getElementById("pri-err").style.display = "none"
                    if (pri.value.toLowerCase() == 'high' || pri.value.toLowerCase() == 'low' || pri.value.toLowerCase() == 'medium') {
                        document.getElementById("pri-err2").style.display = "none"
                        let tasks = JSON.parse(localStorage.getItem("tasks")) || []
                        if (tasks == "") {
                            addTask(tasks);
                        } else {
                            checkExistance(tasks);
                        }
                    } else {
                        document.getElementById("pri-err2").style.display = "block"
                    }
                }
            }
        }
    }
})

function checkExistance(tasks) {
    let valid
    tasks.forEach((e) => {
        if (e.title == title.value) {
            valid = 0
        } else {
            valid = 1;
        }
    })
    if (valid == 1)
        addTask(tasks);
    else
        alert("task Exist")
}

function addTask(tasks) {
    let num = tasks.length
    let obj = {
        title: `${title.value}`,
        des: `${des.value}`,
        due: `${due.value}`,
        pri: `${pri.value.toLowerCase()}`,
        num: `${num + 1}`
    }
    tasks.push(obj)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    title.value = ""
    des.value = ""
    due.value = ""
    pri.value = ""
    document.getElementById("display").innerHTML = display();
}

document.getElementById("display").innerHTML = display();
function display() {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    return tasks.map((e) => {
        return `<div class="dis-box">
                    <h2 id="task-no">${e.num}</h2>
                    <h4>${e.title}</h4>
                    <p>${e.des}</p>
                    <p>${e.due}</p>
                    <p>${e.pri}</p>
                    <button class="del-btn" value="${e.title}">Delete</button>
                </div>`
    }).join('')
}