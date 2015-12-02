import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {Contacts} from './app/components/contacts/contacts';
import {About} from './app/components/about/about';
import {Home} from './app/components/home/home';
import {Catalog} from './app/components/catalog/catalog';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';

declare var System:any;

@Component(
{
    selector: 'demo-app',
    templateUrl: './app/demo-app.html',
    directives:[About, Contacts, Home, ROUTER_DIRECTIVES]
})

@RouteConfig([
    new Route({path: '/about', component: About, name: 'About'}),
    new Route({path: '/catalog', component: Catalog, name: 'Catalog'}),
    new Route({path: '/home', component: Home, name: 'Home'}),
    new Route({path: '/contacts', component: Contacts, name: 'Contacts'})
])
 
class MyDemoApp {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path) {

        if(path === this.location.path()){
            return true;
        }
        else if(path.length > 0){
            return this.location.path().indexOf(path) > -1;
        }
    }
}

bootstrap(MyDemoApp,[ROUTER_PROVIDERS,
          provide(LocationStrategy, {useClass: HashLocationStrategy})]);