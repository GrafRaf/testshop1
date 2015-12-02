System.register(['angular2/angular2'], function(exports_1) {
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
    var angular2_1;
    var Image, Category, CatalogService;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
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
            exports_1("Category", Category);
            CatalogService = (function () {
                function CatalogService() {
                    this.categories = [
                        new Category("Category1", [
                            new Image("101001.jpg"),
                            new Image("101001.jpg")
                        ]),
                        new Category("Category2", [
                            new Image("101003.jpg"),
                            new Image("101004.jpg")
                        ])
                    ];
                }
                CatalogService = __decorate([
                    angular2_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CatalogService);
                return CatalogService;
            })();
            exports_1("CatalogService", CatalogService);
        }
    }
});
//# sourceMappingURL=catalog-service.js.map