System.register(['angular2/testing', './catalog'], function(exports_1) {
    var testing_1, catalog_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (catalog_1_1) {
                catalog_1 = catalog_1_1;
            }],
        execute: function() {
            testing_1.describe('Catalog Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(catalog_1.Catalog).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=catalog.spec.js.map