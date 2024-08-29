import { ReactNode } from "react";
import * as styles from "./styles";

export interface Props {
    id: number;
    name: string;
    phoneNumber: string;
    age: number;
}

const UserItem = ({ name, age }: Props): ReactNode => {
    return (
        <div css={styles.wrapper}>
            <p css={styles.name}>{name}</p>
            <p css={styles.age}>나이: {age}</p>
        </div>
    );
};

export default UserItem;
