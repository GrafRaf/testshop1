System.register(['angular2/testing', './contacts'], function(exports_1) {
    var testing_1, contacts_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (contacts_1_1) {
                contacts_1 = contacts_1_1;
            }],
        execute: function() {
            testing_1.describe('Contacts Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(contacts_1.Contacts).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=contacts.spec.js.map