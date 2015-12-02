import {Directive, Component, NgFor} from 'angular2/angular2';
import {CatalogService} from '../../services/catalog-service/catalog-service'

@Component({
  //selector: 'catalog',
  templateUrl: 'app/components/catalog/catalog.html',
  styleUrls: ['app/components/catalog/catalog.css'],
  providers: [CatalogService], //
  directives: [NgFor], //
  pipes: []
})

export class Catalog {

  category: Category;
  categories: [Category];

  constructor(catalogService: CatalogService) {
    this.categories = catalogService.categories;
    this.category = this.categories[0]; 
  }

  categoryChanged(){
    // (change)="categoryChanged()"
  }

}



class Image {
  FileName: string;
  
  constructor(fileName: string){
    this.FileName = fileName;
  }
}

class Category{
   Title: string;
   Images: [Image];
   
   constructor(title:string, images: [Image]){
     this.Title = title;
     this.Images = images;
   }
}