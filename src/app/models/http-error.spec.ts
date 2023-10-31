import { HttpError } from './http-error';

describe('HttpErrors', () => {
  it('should create an instance', () => {
    expect(new HttpError(400, 'aa')).toBeTruthy();
  });
});
