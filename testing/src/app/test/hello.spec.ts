

xdescribe('hello test', () => {

  beforeAll( () => {
    console.log('before all');
  });

  beforeEach( () => {
    console.log('before each');
  });

  it('to test hello world', () => {

    expect('hello world').toBe('hello world');
  });


});
