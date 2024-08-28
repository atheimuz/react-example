import React, { ErrorInfo } from "react";

interface State {
    error: Error | null;
}

export interface RenderFallbackType {
    error: Error;
    reset: () => void;
}

interface Props {
    onReset?: () => void;
    renderFallback: (props: RenderFallbackType) => React.ReactNode;
    children: React.ReactNode;
}

const initialState: State = {
    error: null,
};

class ErrorBoundary extends React.Component<Props, State> {
    state = initialState;

    resetErrorBoundary = () => {
        this.props.onReset?.();
        this.setState(initialState);
    };

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error);
        console.log(info);
    }

    componentDidUpdate() {
        if (this.state.error == null) {
            return;
        }
    }

    render() {
        const { children, renderFallback } = this.props;
        const { error } = this.state;

        if (error != null) {
            return renderFallback({
                error,
                reset: this.resetErrorBoundary,
            });
        }

        return children;
    }
}

export default ErrorBoundary;
