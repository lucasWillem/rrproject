import React, { FC, ReactNode } from 'react';
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';
import { FallbackRenderer } from './subComponents/FallbackRenderer';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary
      fallbackRender={(props: FallbackProps) => <FallbackRenderer {...props} />}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export { ErrorBoundary };
