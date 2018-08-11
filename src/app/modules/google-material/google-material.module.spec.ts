import { GoogleMaterialModule } from './google-material.module';

describe('MyOwnCustomMaterialModule', () => {
  let googleMaterialModule: GoogleMaterialModule;

  beforeEach(() => {
    googleMaterialModule = new GoogleMaterialModule();
  });

  it('should create an instance', () => {
    expect(googleMaterialModule).toBeTruthy();
  });
});
