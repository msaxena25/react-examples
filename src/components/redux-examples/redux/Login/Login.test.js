import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

// mock for history object
const mockHistory = {
    push: jest.fn(),
}

describe('Login component', () => {
    afterEach(() => {
        jest.fn().mockReset();
    })

    test('Login render', () => {
        render(<Login />);
        expect(screen.getByText('Sign In to your account')).toBeInTheDocument();
    });

    test('should show alert of please enter username & password when clicking on Login button', () => {
        //window.alert = jest.fn().mockReturnValue('Please enter Username & password'); - it works globally
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        render(<Login />);
        const loginBtn = screen.getByTestId("loginBtn");
        fireEvent.click(loginBtn);
        expect(window.alert).toBeCalledWith('Please enter Username & password')
    })

    test('Username & Password field handle change', () => {
        render(<Login />);
        const userNameField = screen.getByTestId("username");
        const passwordField = screen.getByPlaceholderText('Password');
        fireEvent.change(userNameField, { target: { value: 'jsmount', name: 'userName' } });
        expect(userNameField.value).toBe('jsmount')
        fireEvent.change(passwordField, { target: { value: '1234', name: 'password' } });
        expect(passwordField.value).toBe('1234')
    })
    test('Should show error incorrect username and password when login click', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        const loginDataProps = { userName: 'mohit', password: '1234' };
        render(<Login loginData={loginDataProps} />);
        const userNameField = screen.getByTestId("username");
        const passwordField = screen.getByPlaceholderText('Password');
        fireEvent.change(userNameField, { target: { value: 'jsmount', name: 'userName' } });
        expect(userNameField.value).toBe('jsmount')
        fireEvent.change(passwordField, { target: { value: '1234', name: 'password' } });
        expect(passwordField.value).toBe('1234')
        const loginBtn = screen.getByTestId("loginBtn");
        fireEvent.click(loginBtn);
        expect(window.alert).toBeCalledWith('Incorrect Username or Password')
    })
    test('Should Login success when login button click called with correct username and password', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        const loginDataProps = { userName: 'jsmount', password: '1234' };
        render(<Login loginData={loginDataProps} history={mockHistory} />);
        const userNameField = screen.getByTestId("username");
        const passwordField = screen.getByPlaceholderText('Password');
        fireEvent.change(userNameField, { target: { value: 'jsmount', name: 'userName' } });
        expect(userNameField.value).toBe('jsmount')
        fireEvent.change(passwordField, { target: { value: '1234', name: 'password' } });
        expect(passwordField.value).toBe('1234')
        const loginBtn = screen.getByTestId("loginBtn");
        fireEvent.click(loginBtn);
        expect(window.alert).toBeCalledWith('Login success');
        expect(mockHistory.push).toBeCalledWith('/centreslist');
    })

    // test('it displays a row for each user', async () => {
    //     axios.get.mockResolvedValue({ data: fakeUsers });
    //     render(<Login />);
    //     const userList = await waitFor(() => screen.findAllByTestId('user-item'));
    //     expect(userList).toHaveLength(2);
    // });
});

/**
    window.alert = jest.fn().mockReturnValueOnce('Please enter Username & password'); // this will be created as global and you will get  same return value in every test case. So better way to make spy on this in each test case.
    jest.spyOn(window, 'alert').mockImplementation(() => {});
 */