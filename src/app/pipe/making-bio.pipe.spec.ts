import { MakingBioPipe } from './making-bio.pipe';

describe('MakingBioPipe', () => {
  it('create an instance', () => {
    const pipe = new MakingBioPipe();
    expect(pipe).toBeTruthy();
  });
});
