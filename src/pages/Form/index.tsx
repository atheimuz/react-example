import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import FirstForm from "@components/form/FirstForm";
import UserList from "@components/form/UserList";
import * as styles from "./styles";

const FormPage = (): ReactNode => {
    return (
        <div css={styles.wrapper}>
            <div css={styles.panel}>
                <Routes>
                    <Route path="first" element={<FirstForm />} />
                </Routes>
            </div>
            <div css={styles.panel}>
                <UserList />
            </div>
        </div>
    );
};

export default FormPage;
