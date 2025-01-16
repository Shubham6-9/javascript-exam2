document.getElementById("add").addEventListener('click', () => {
    document.getElementById("add-task-box").style.display = "block"
})
document.getElementById("close").addEventListener('click', () => {
    document.getElementById("add-task-box").style.display = "none"
})

let title = document.getElementById("title")
let des = document.getElementById("des")
let due = document.getElementById("due")
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
                let tasks = JSON.parse(localStorage.getItem("tasks")) || []
                if (tasks == []) {
                    addTask();
                } else {
                    // checkExistance(tasks);
                    console.log(tasks)
                }
            }
        }
    }
})

// function checkExistance() {
//     let tasks = JSON.parse(localStorage.getItem("tasks"))
// }

function addTask() {
    let obj = {
        title: `${title.value}`,
        des: `${des.value}`,
        due: `${due.value}`
    }
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(obj)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}