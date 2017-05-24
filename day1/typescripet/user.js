var User = (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var userObj = new User("Pavan");
console.log(userObj.getName());
