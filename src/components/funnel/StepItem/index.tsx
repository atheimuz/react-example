import { ReactNode } from "react";
import { FaChevronRight } from "react-icons/fa";
import * as styles from "./styles";

const StepItem = ({
    icon,
    title,
    value,
    onClick,
}: {
    icon?: ReactNode;
    title: string;
    value?: string;
    onClick?: () => void;
}): ReactNode => {
    return (
        <li css={styles.step} onClick={onClick}>
            {icon && <span css={styles.icon}>{icon}</span>}
            <div css={styles.textBox}>
                <h3 css={styles.stepTitle}>{title}</h3>
                <p
                    css={(props) =>
                        styles.stepValue({
                            ...props,
                            active: !!value,
                        })
                    }
                >
                    {value || "선택"}
                </p>
            </div>
            <FaChevronRight css={styles.arrowIcon} />
        </li>
    );
};

export default StepItem;
