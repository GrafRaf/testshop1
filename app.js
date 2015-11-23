System.register(['angular2/angular2', './app/testshop1'], function(exports_1) {
    var angular2_1, testshop1_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (testshop1_1_1) {
                testshop1_1 = testshop1_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(testshop1_1.Testshop1App);
        }
    }
});
//# sourceMappingURL=app.js.map