
// Ejercicio MongoDB

// 1.1. Desarrollar el Proyecto
// A continuación, creará su propia base de datos de red social con las siguientes colecciones:
// Users
// Posts
// Comments

test > use myFirstDB
myFirstDB > db.createCollection('users')
{ ok: 1 }
myFirstDB > db.createCollection('posts')
{ ok: 1 }


// 1.2. Ejecute las siguientes consulta

// A continuación tendrás que realizar las siguientes consultas MongoDB:

// 1.2.1 INSERTAR DATOS


// Insertar al menos 15 publicaciones nuevas con almenos 2 comentarios por publicación:
// Title
// Body
// Username
// Comments
// Username
// Body

db.posts.insertMany([
    { title: "title1", body: "text1", username: "user1", comments: [{ username: "commentUserA", body: "commentA" }, { username: "commentUserB", body: "commentB" }] },
    { title: "title2", body: "text2", username: "user2", comments: [{ username: "commentUserC", body: "commentC" }, { username: "commentUserD", body: "commentD" }] },
    { title: "title3", body: "text3", username: "user3", comments: [{ username: "commentUserD", body: "commentD" }, { username: "commentUserE", body: "commentE" }] },
    { title: "title4", body: "text4", username: "user4", comments: [{ username: "commentUserF", body: "commentF" }, { username: "commentUserG", body: "commentG" }] },
    { title: "title5", body: "text5", username: "user5", comments: [{ username: "commentUserH", body: "commentH" }, { username: "commentUserI", body: "commentI" }] },
    { title: "title6", body: "text6", username: "user6", comments: [{ username: "commentUserJ", body: "commentJ" }, { username: "commentUserK", body: "commentK" }] },
    { title: "title7", body: "text7", username: "user7", comments: [{ username: "commentUserL", body: "commentL" }, { username: "commentUserM", body: "commentM" }] },
    { title: "title8", body: "text8", username: "user8", comments: [{ username: "commentUserN", body: "commentN" }, { username: "commentUserO", body: "commentO" }] },
    { title: "title9", body: "text9", username: "user9", comments: [{ username: "commentUserP", body: "commentP" }, { username: "commentUserQ", body: "commentQ" }] },
    { title: "title10", body: "text10", username: "user10", comments: [{ username: "commentUserR", body: "commentR" }, { username: "commentUserS", body: "commentS" }] },
    { title: "title11", body: "text11", username: "user11", comments: [{ username: "commentUserT", body: "commentT" }, { username: "commentUserU", body: "commentU" }] },
    { title: "title12", body: "text12", username: "user12", comments: [{ username: "commentUserV", body: "commentV" }, { username: "commentUserW", body: "commentW" }] },
    { title: "title13", body: "text13", username: "user13", comments: [{ username: "commentUserX", body: "commentX" }, { username: "commentUserY", body: "commentY" }] },
    { title: "title14", body: "text14", username: "user14", comments: [{ username: "commentUserZ", body: "commentZ" }, { username: "commentUserA", body: "commentA" }] },
    { title: "title15", body: "text15", username: "user15", comments: [{ username: "commentUserB", body: "commentB" }, { username: "commentUserC", body: "commentC" }] },
])




// Insertar al menos 10 nuevos usuarios:
// Username
// Email
// Age


db.users.insertMany([
    { username: "User1", email: "user1@gmail.com", age: 34 },
    { username: "User2", email: "user2@gmail.com", age: 54 },
    { username: "User3", email: "user3@gmail.com", age: 45 },
    { username: "User4", email: "user4@gmail.com", age: 64 },
    { username: "User5", email: "user5@gmail.com", age: 14 },
    { username: "User6", email: "user6@gmail.com", age: 96 },
    { username: "User7", email: "user7@gmail.com", age: 21 },
    { username: "User8", email: "user8@gmail.com", age: 65 },
    { username: "User9", email: "user9@gmail.com", age: 56 },
    { username: "User10", email: "user10@gmail.com", age: 65 },
])

// 1.2.2 ACTUALIZAR DATOS

// Actualizar publicaciones:
// Actualiza todos los campos de una publicación

db.posts.updateOne({ title: 'title1' },
    {
        $set: {
            body: "text1Changed",
            username: "user1.0"
        }
    })

// Cambiar el body de una publicación.

db.posts.updateOne({ title: 'title1' },
    { $set: { body: "text1Changed-1.0" } })


// Actualizar comentarios:
// Actualiza el comentario de una publicación.

db.posts.updateOne({ title: 'title1' },
    {
        $set:
            { comments: [{ body: "comment1Updated" }] }
    })


// Actualizar usuarios:
// Actualiza todos los campos de un usuario


db.users.updateOne({ username: "User1" },
    {
        $set: {
            email: "user1.0@gmail.com",
            age: 12
        }
    })

// Cambiar el email de dos usuarios, es decir, hacer la query dos veces.

db.users.updateOne({ username: "User2" },
    {
        $set: {
            email: "user2.0@gmail.com",
        }
    })

db.users.updateOne({ username: "User3" },
    {
        $set: {
            email: "user3.0@gmail.com",
        }
    })


// Aumenta en 5 años la edad de un usuario

db.users.updateOne({ username: 'User4' },
    {
        $inc: {
            age: 5
        }
    })


// 1.2.3 OBTENER DATOS

// Seleccionar todas las publicaciones

db.posts.find()


// Selecciona las publicaciones que coincidan con el username indicado

db.posts.find({ username: 'user6' })


// Seleccione todos los usuarios con una edad mayor a 20

db.users.find({ age: { $gt: 20 } })


// Seleccione todos los usuarios con una edad inferior a 23

db.users.find({ age: { $lt: 23 } })


// Seleccione todos los usuarios que tengan una edad entre 25 y 30 años

db.users.find({
    $and: [
        { age: { $gt: 14 } }, { age: { $lt: 56 } }
    ]
})


// Muestra los usuarios de edad menor a mayor y viceversa

db.users.find().sort({ age: 1 })
db.users.find().sort({ age: -1 })


// Seleccione el número total de usuarios

db.users.find().count()


// Seleccione todas las publicaciones de la siguiente manera: Título de la publicación: "título de las publicaciones"

db.posts.find().forEach((doc) => {
    print("Title post: " + doc.title)
})


// Selecciona solo 2 usuarios

db.users.find().limit(2)


// Busca por title 2 publicaciones

db.posts.find({
    $or: [
        { title: "title12" }, { title: "title14" }
    ]
})


// 1.2.4 BORRAR DATOS

// Elimina a todos los usuarios con una edad mayor a 30

db.users.deleteMany({age:{$gt:30}})