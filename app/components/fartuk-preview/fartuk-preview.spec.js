System.register(['angular2/testing', './fartuk-preview'], function(exports_1) {
    var testing_1, fartuk_preview_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (fartuk_preview_1_1) {
                fartuk_preview_1 = fartuk_preview_1_1;
            }],
        execute: function() {
            testing_1.describe('FartukPreview Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(fartuk_preview_1.FartukPreview).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=fartuk-preview.spec.js.map