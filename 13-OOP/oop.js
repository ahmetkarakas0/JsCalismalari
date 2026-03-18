class users {
    constructor(username,mail,age){
        this.username = username;
        this.Mail = mail;
        this.age = age;
    }
    login(){
        console.log(`${this.username} giriş yaptı. maili: ${this.Mail}`);
    }
    logout(){
        console.log(`${this.username} çıkış yaptı. maili: ${this.Mail}`);
    }
}
class admins extends users{
    deleteusers(userdeleter) {
        myUsers = myUsers.filter((useras) => useras.username !== userdeleter.username);

    }
}

const userOne = new users("ahmet","karakas@gmail",31);
const userTwo = new users("baran","burak@gmail",25);
const userAdmin = new admins("selim","selim@gmail",27);

let myUsers = [userOne,userTwo,userAdmin];

userAdmin.deleteusers(userOne);
console.log(myUsers);




