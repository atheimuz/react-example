import { ReactNode } from "react";
import * as styles from "./styles";

interface Props {
    error: Error;
    reset: () => void;
}
const ErrorMessage = ({ error, reset }: Props): ReactNode => {
    return (
        <div css={styles.wrapper}>
            {(() => {
                switch (error.message) {
                    case "Network Error":
                        return (
                            <p>
                                내용을 불러오지 못했어요. {"\n"}다시 시도해
                                주세요.
                            </p>
                        );

                    default:
                        return <p>test</p>;
                }
            })()}

            <button type="button" css={styles.btn} onClick={reset}>
                재시도
            </button>
        </div>
    );
};

export default ErrorMessage;
