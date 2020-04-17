require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e96c61a0d160959ec98f854').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed : false })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed : false })
    return count
}

deleteTaskAndCount('5e958318284cab6d58c37714').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})