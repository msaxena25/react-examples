import React, { Suspense, useState } from "react";
import {fireEvent, render,screen, waitFor} from '@testing-library/react';

const RouterComponentA = React.lazy(() =>
  import("./routing-test/RouterComponentA")
);

const RouterComponentB = React.lazy(() =>
  import("./routing-test/RouterComponentB")
);

import LazyloadComponent from './LazyloadComponent';

describe('LazyLoad component testing', () => {
    test('render component', async () => {
        render(<LazyloadComponent/>);
        const btn = screen.getByText('Load Components');
        fireEvent.click(btn);
        await waitFor(() => screen.getByText('Component loaded in lazy way.'));
        expect(screen.getByText('Component loaded in lazy way.')).toBeInTheDocument();
    })
})