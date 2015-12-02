import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/angular2';
import {CatalogService} from './catalog-service';


describe('CatalogService Service', () => {

  beforeEachProviders(() => []);


  it('should ...', inject([CatalogService], (service:CatalogService) => {

  }));

});
