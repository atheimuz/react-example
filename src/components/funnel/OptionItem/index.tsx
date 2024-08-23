import { ReactNode } from "react";
import { FaChevronRight } from "react-icons/fa";
import * as styles from "./styles";

const OptionItem = ({
    icon,
    title,
    onClick,
}: {
    icon?: ReactNode;
    title: string;
    onClick?: () => void;
}): ReactNode => {
    return (
        <li css={styles.option} onClick={onClick}>
            {icon && <span css={styles.icon}>{icon}</span>}
            <div css={styles.textBox}>
                <p css={styles.optionTitle}>{title}</p>
                <FaChevronRight css={styles.arrowIcon} />
            </div>
        </li>
    );
};

export default OptionItem;
