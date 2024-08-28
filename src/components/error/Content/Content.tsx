import { ReactNode, Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import ErrorBoundary, {
    RenderFallbackType,
} from "@/components/error/ErrorBoundary";
import ContentChildren from "@/components/error/ContentChildren";
import ErrorMessage from "@/components/error/ErrorMessage";
import * as styles from "./styles";

const Content = (): ReactNode => {
    return (
        <div css={styles.wrapper}>
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary
                        onReset={reset}
                        renderFallback={({
                            error,
                            reset,
                        }: RenderFallbackType) => (
                            <ErrorMessage error={error} reset={reset} />
                        )}
                    >
                        <Suspense fallback={<p>Loading...</p>}>
                            <ContentChildren />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </div>
    );
};

export default Content;
