import AppService from './app.service';
import axios from 'axios';
jest.mock('axios');


describe('AppService', () => {
    afterEach(() => {
        axios.get.mockClear();
    });
    it('should return users', async () => {
        const data = { data: [{ name: 'jsmount' }] };
        axios.get.mockResolvedValue(data);
        // axios.get.mockImplementation(() => Promise.resolve(data)); -- You can write like this as well.
        const response = await AppService.getUsers();
        expect(response).toEqual(data.data);

    });

    it('should post user data', async () => {
        const appService = new AppService();
        const data = { data: [{ name: 'jsmount' }] };
        axios.post.mockResolvedValue(data);
        const response = await appService.postUsers();
        expect(response).toEqual(data.data);
    });
})

  // https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue