const userModel = require("../models/user.model")

const listOfStudents = (req,res) => {
    res.send(
        [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",              
              "website": "hildegard.org",              
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",              
              "website": "anastasia.net",              
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "phone": "(254)954-1289",
              "website": "demarco.info",
            },            
          ]
    )
}

const welcomeUser = (req, res)=> {
    res.send("Welcome User")
}

const getRegister = (req, res)=>{
    res.send("Signin to your dashboard")
}

const postRegister = async (req, res)=>{
    try{
        console.log(req.body)
        const {firstName, lastName, email, password} = req.body
        let user = new userModel({firstName:firstName, lastName:lastName, password:password, email:email})
        await user.save()
        console.log("user saved")
    }catch (error) {
        console.log(error);
        console.log("user not saved")
        res.status(400).send("user not saved")
    }
}


const login = (req, res)=>{
    res.send("Signin to your dashboard")
}


module.exports = {welcomeUser,getRegister,login,postRegister,listOfStudents}