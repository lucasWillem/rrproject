import React, { ReactNode } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from "../../src/redux/store";

interface AllTheProvidersProps {
 children: ReactNode;
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
 const queryClient = new QueryClient();

 return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          {children}
        </Router>
      </Provider>
    </QueryClientProvider>
 );
};

const customRender = (ui: React.ReactElement, options: RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement> | undefined) =>
 render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };