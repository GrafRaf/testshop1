System.register(['angular2/angular2', '../../services/catalog-service/catalog-service'], function(exports_1) {
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
    var angular2_1, catalog_service_1;
    var Catalog, Image, Category;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (catalog_service_1_1) {
                catalog_service_1 = catalog_service_1_1;
            }],
        execute: function() {
            Catalog = (function () {
                function Catalog(catalogService) {
                    this.categories = catalogService.categories;
                    this.category = this.categories[0];
                }
                Catalog.prototype.categoryChanged = function () {
                    // (change)="categoryChanged()"
                };
                Catalog = __decorate([
                    angular2_1.Component({
                        //selector: 'catalog',
                        templateUrl: 'app/components/catalog/catalog.html',
                        styleUrls: ['app/components/catalog/catalog.css'],
                        providers: [catalog_service_1.CatalogService],
                        directives: [angular2_1.NgFor],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [catalog_service_1.CatalogService])
                ], Catalog);
                return Catalog;
            })();
            exports_1("Catalog", Catalog);
            Image = (function () {
                function Image(fileName) {
                    this.FileName = fileName;
                }
                return Image;
            })();
            Category = (function () {
                function Category(title, images) {
                    this.Title = title;
                    this.Images = images;
                }
                return Category;
            })();
        }
    }
});
//# sourceMappingURL=catalog.js.map