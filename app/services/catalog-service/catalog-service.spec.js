System.register(['angular2/testing', './catalog-service'], function(exports_1) {
    var testing_1, catalog_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (catalog_service_1_1) {
                catalog_service_1 = catalog_service_1_1;
            }],
        execute: function() {
            testing_1.describe('CatalogService Service', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.inject([catalog_service_1.CatalogService], function (service) {
                }));
            });
        }
    }
});
//# sourceMappingURL=catalog-service.spec.js.map