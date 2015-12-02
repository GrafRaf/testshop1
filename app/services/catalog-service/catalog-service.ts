import {Injectable} from 'angular2/angular2';

class Image {
  FileName: string;
  
  constructor(fileName: string){
    this.FileName = fileName;
  }
}

export class Category{
   Title: string;
   Images: [Image];
   
   constructor(title:string, images: [Image]){
     this.Title = title;
     this.Images = images;
   }
}

@Injectable()
export class CatalogService {

  categories: [Category];

  constructor() {
    this.categories = [ 
      new Category("Category1",[
        new Image("101001.jpg"),
        new Image("101001.jpg")
        ] ), 
        new Category("Category2",[
          new Image("101003.jpg"),
          new Image("101004.jpg")
          ])
          ];
  }
     
}