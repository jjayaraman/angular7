describe('hello test', () => {
  let count = 1;

  beforeAll(() => {
    console.log('beforeAll...');
  });

  beforeEach(() => {
    console.log('beforeEach Test :', count++);
  });

  it('test hello', () => {
    expect('hello').toBeTruthy();
    expect('jjj').toBe('jjj');
  });

  it('test two', () => {
    expect('xx').toBeTruthy();
  });
});
