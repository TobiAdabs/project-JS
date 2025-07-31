let Man = {
    Firstname: "Jane",
    Lastname: "Doe",
    Fullname : function fullname() {
        console.log(this.Firstname + this.Lastname)
    },
    "Complexion": "Chocolate"
};

console.log("My name is " + Man.Fullname);