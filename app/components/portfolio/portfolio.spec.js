System.register(['angular2/testing', './portfolio'], function(exports_1) {
    var testing_1, portfolio_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (portfolio_1_1) {
                portfolio_1 = portfolio_1_1;
            }],
        execute: function() {
            testing_1.describe('Portfolio Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(portfolio_1.Portfolio).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=portfolio.spec.js.map