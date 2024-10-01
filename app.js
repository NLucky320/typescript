var a = 12;
var b = 13;
var x = [1, 2, 3, 4];
var y = x;
console.log(y);
var y = [1, 2, 3, 4, 5];
console.log(x, y);
var x = y;
console.log(x, y);
var y = x;
console.log(x, y);
var c = 23;
var d = "karim";
var arr = [12, 13, 14, 'karim', { name: 'rahim' }];
var array = [22, 'karim'];
// let array2:[number,string]=['karim',22]
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["HOST"] = "host";
})(userRoles || (userRoles = {}));
userRoles.ADMIN;
