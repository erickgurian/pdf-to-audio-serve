const { Item } = require('../../../src/app/models');
const truncate = require('../../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should add item in database', async () => {
    const name = 'eu.pdf';
    const itemStub = {
      name,
      key: '71a8d78as7d-eu.pdf',
      url: 'localhost.com.br/sdkajslajd',
      size: 10000,
      duration: 100,
      user_id: 1,
    };

    const itemResult = await Item.create(itemStub);

    expect(itemResult.name).toBe(name);
  });
});
