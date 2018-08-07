import { HelloWorldModule } from './hello-world.module';

describe('HelloWorldModule', () => {
  let helloWorldModule: HelloWorldModule;

  beforeEach(() => {
    helloWorldModule = new HelloWorldModule();
  });

  it('should create an instance', () => {
    expect(helloWorldModule).toBeTruthy();
  });
});
