import useMonth from './useMonth';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useMonth Hook Test', () => {
    test('render', () => {
        const { result } = renderHook(() => useMonth());
        const date = new Date();
        const month = date.getMonth();
        expect(result.current).toStrictEqual([month]);
    })
})


/**
 * https://dev.to/ms314006/react-write-a-unit-test-for-custom-hooks-in-ten-minutes-497l
 * We would use react-hooks-testing-library write the unit test.
 * So the first step, we need to install react-hooks-testing-library and it dependent packages:
 */