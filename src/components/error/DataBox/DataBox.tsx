import { ReactNode } from "react";
import useProductQuery from "@/queries/useProductQuery";
import * as styles from "./styles";

const DataBox = (): ReactNode => {
    const { refetch } = useProductQuery({ page: 1 });

    return (
        <div css={styles.wrapper}>
            <button
                type="button"
                css={styles.btn}
                onClick={() => {
                    refetch();
                }}
            >
                에러 발생
            </button>
        </div>
    );
};

export default DataBox;
