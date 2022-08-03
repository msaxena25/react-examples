import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from '../actions/action-types';
import userReducer from './user-list.reducer';

describe('UserReducers', () => {
    it('should return initial state', () => {
        expect(userReducer(null, {})).toBe(null);
    })
    it('should handle GET_USERS_REQUEST', () => {
        const state = userReducer(undefined, { type: GET_USERS_REQUEST });
        expect(state.loading).toBeTruthy();
    })
    it('should handle GET_USERS_SUCCESS', () => {
        const state = userReducer(undefined, { type: GET_USERS_SUCCESS, payload: [{ name: 'test' }] });
        expect(state.loading).toBeFalsy();
        expect(state.users).toEqual([{ name: 'test' }]);
    })
});