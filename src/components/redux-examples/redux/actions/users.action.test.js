import * as usersActions from './users.action';
import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from './action-types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

import axios from 'axios';
jest.mock('axios');

describe('UserActions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    // Simple action testing that only have type
    test('should create an action to get User request', () => {
        const expectedAction = {
            type: GET_USERS_REQUEST
        }
        expect(usersActions.getUsersRequest()).toEqual(expectedAction);
    });

    // Action that have type and payload
    test('should create an action to get User Success', () => {
        const expectedAction = {
            type: GET_USERS_SUCCESS,
            payload: 'JsMount'
        }
        expect(usersActions.getUsersSuccess('JsMount')).toEqual(expectedAction);
    });

    // Testing of Async Action with Middleware
    test('should create an action to get Users List', async () => {
        const data = {
            data: [
                { name: 'JsMount', email: 'info@jsmount.com' },
                { name: 'web', email: 'technical@gmail.com' }
            ]
        }
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await store.dispatch(usersActions.GetUsers());
        const actions = store.getActions();
        // console.log('actions :', actions);
        expect(actions[0].type).toEqual(GET_USERS_REQUEST);
        expect(actions[1].payload).toEqual(data.data);
    });
})