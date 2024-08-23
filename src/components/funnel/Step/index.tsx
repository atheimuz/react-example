import { ReactNode } from "react";
import * as styles from "./styles";

const Step = ({ children }: { children: ReactNode }): ReactNode => {
    return <div css={styles.wrapper}>{children}</div>;
};

const Title = ({ children }: { children: ReactNode }): ReactNode => {
    return <h2 css={styles.title}>{children}</h2>;
};

const Content = ({ children }: { children: ReactNode }): ReactNode => {
    return <div css={styles.content}>{children}</div>;
};

Step.Title = Title;
Step.Content = Content;

export default Step;
