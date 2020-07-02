const users = []


const addUser = ({id, username, room}) =>
{
username = username.trim().toLowerCase()
room = room.trim().toLowerCase()

if(!username || !room )
{
    return {
        error: 'Username and room are required!'
    }
}

const existinguser = users.find((user)=>
{
    return user.room === room && user.username === username
})

if(existinguser)
{
    return {
        error: 'Username is in use!'
    }
}

const user  = { id,username,room }
users.push(user)
return {user}

}

const getUser = (id) =>
{
    return users.find((user)=> user.id === id)

}

const getUsersinRoom = (room) =>
{
    room = room.trim().toLowerCase()
    return users.filter((user)=> user.room === room)
}


const removeUser = (id) =>
{
    const index = users.findIndex((user) =>
    {
        return user.id === id
    })

    if(index != -1)
    {
        return users.splice(index, 1)[0]
    }
}





const user  = getUser(32)
console.log(user)

const userRooms = getUsersinRoom('kazipet')
console.log(userRooms)

module.exports ={
    addUser,
    removeUser,
    getUser,
    getUsersinRoom
}