require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5e96c12dd822d94a04d192c7', {age : 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age : 1})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id , { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e96c12dd822d94a04d192c7', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})