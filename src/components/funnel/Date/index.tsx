import { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Sheet } from "react-modal-sheet";
import * as styles from "./styles";

const Date = ({
    job,
    onNext,
}: {
    job: "student" | "employee";
    onNext: (value: string) => void;
}): ReactNode => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState<string>("");
    const modalState = searchParams.get("modal");

    const onClose = (): void => {
        navigate(location.pathname);
    };

    return (
        <Sheet
            isOpen={modalState === "date"}
            onClose={onClose}
            detent="content-height"
        >
            <Sheet.Backdrop onTap={onClose} />
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                    <div css={styles.wrapper}>
                        <h3 css={styles.title}>
                            {job === "student" && "입학년도를 입력해 주세요."}
                            {job === "employee" && "입사년도를 입력해 주세요."}
                        </h3>
                        <input
                            type="text"
                            css={styles.input}
                            value={inputValue}
                            onChange={(e) => setInputValue(e?.target?.value)}
                        />
                        <button
                            type="button"
                            css={styles.btn}
                            onClick={() => onNext(inputValue)}
                            disabled={!inputValue}
                        >
                            다음
                        </button>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
        </Sheet>
    );
};

export default Date;
