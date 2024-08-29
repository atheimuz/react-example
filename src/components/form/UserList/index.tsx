import { ReactNode } from "react";
import useUserQuery from "@/queries/useUserQuery";
import UserItem, { Props } from "@components/form/UserItem";
import * as styles from "./styles";

const UserList = (): ReactNode => {
    const { data } = useUserQuery();

    return (
        <div>
            <ul>
                {data?.map((item: Props) => (
                    <li key={item.id} css={styles.listItem}>
                        <UserItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
