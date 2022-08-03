import React from 'react';
import * as redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import UsersListWithSelector from './UserListWithUseSelector';

describe('User List testcases that contain useSelector & useDispatch', () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;
    beforeEach(() => {
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        // if you have to test other selectors then this line you can write on particular test case.
        spyOnUseSelector.mockReturnValue({users: [{ id: 1, name: 'John', email: 'username@gmail.com' }]});
        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        mockDispatch = jest.fn();
        spyOnUseDispatch.mockReturnValue(mockDispatch);
    });
    afterEach(() => {
        jest.restoreAllMocks();
      });
    it('render component', () => {
        render(<UsersListWithSelector/>);
        expect(screen.getByText('How to Build an Application Using React Js and Redux')).toBeInTheDocument();
    })
});
