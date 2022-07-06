var Applicant = /** @class */ (function () {
    function Applicant(name, count) {
        if (count === void 0) { count = 0; }
        var _this = this;
        this.getCount = function () { return _this.count++; };
        this.name = name;
        this.count = count;
    }
    return Applicant;
}());
var app1 = new Applicant('Lần 1');
console.log(app1.count);
var app2 = new Applicant('Lần 2');
console.log(app2.count);
