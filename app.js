System.register(['angular2/angular2', './app/components/contacts/contacts', './app/components/about/about', './app/components/home/home', './app/components/catalog/catalog', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, contacts_1, about_1, home_1, catalog_1, router_1, router_2;
    var MyDemoApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (contacts_1_1) {
                contacts_1 = contacts_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (catalog_1_1) {
                catalog_1 = catalog_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            MyDemoApp = (function () {
                function MyDemoApp(router, location) {
                    this.router = router;
                    this.location = location;
                }
                MyDemoApp.prototype.getLinkStyle = function (path) {
                    if (path === this.location.path()) {
                        return true;
                    }
                    else if (path.length > 0) {
                        return this.location.path().indexOf(path) > -1;
                    }
                };
                MyDemoApp = __decorate([
                    angular2_1.Component({
                        selector: 'demo-app',
                        templateUrl: './app/demo-app.html',
                        directives: [about_1.About, contacts_1.Contacts, home_1.Home, router_2.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        new router_2.Route({ path: '/about', component: about_1.About, name: 'About' }),
                        new router_2.Route({ path: '/catalog', component: catalog_1.Catalog, name: 'Catalog' }),
                        new router_2.Route({ path: '/home', component: home_1.Home, name: 'Home' }),
                        new router_2.Route({ path: '/contacts', component: contacts_1.Contacts, name: 'Contacts' })
                    ]), 
                    __metadata('design:paramtypes', [router_2.Router, router_2.Location])
                ], MyDemoApp);
                return MyDemoApp;
            })();
            angular2_1.bootstrap(MyDemoApp, [router_1.ROUTER_PROVIDERS,
                angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.js.map