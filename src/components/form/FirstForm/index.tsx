import { ReactNode } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "my-common-components";
import { QUERY_KEY } from "@/queries/useProductQuery";
import { useCreateUser } from "@/mutations/useUserMutation";
import * as styles from "./styles";

interface FormProps {
    name: string;
    age: number;
}
const FirstForm = (): ReactNode => {
    const queryClient = useQueryClient();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormProps>();
    const { mutate } = useCreateUser({
        onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEY);
        },
    });

    const onSubmit = (props: FormProps) => {
        mutate(props);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                render={({ field }) => (
                    <div css={styles.field}>
                        <TextField size="middle">
                            <TextField.Label>이름</TextField.Label>
                            <TextField.Input
                                {...field}
                                status={
                                    errors.email?.message ? "error" : "default"
                                }
                            />
                            <TextField.Error>
                                {errors.name?.message}
                            </TextField.Error>
                        </TextField>
                    </div>
                )}
                name="name"
                control={control}
                rules={{
                    required: "필수 항목입니다.",
                    pattern: {
                        value: /^[가-힣]+$/i,
                        message: "올바른 형식을 입력해 주세요.",
                    },
                }}
            />
            <Controller
                render={({ field }) => (
                    <div css={styles.field}>
                        <TextField size="middle">
                            <TextField.Label>나이</TextField.Label>
                            <TextField.Input
                                {...field}
                                type="number"
                                status={
                                    errors.email?.message ? "error" : "default"
                                }
                            />
                            <TextField.Error>
                                {errors.age?.message}
                            </TextField.Error>
                        </TextField>
                    </div>
                )}
                name="age"
                control={control}
                rules={{
                    required: "필수 항목입니다.",
                    pattern: {
                        value: /[0-9]/,
                        message: "숫자를 입력해 주세요.",
                    },
                    min: {
                        value: 18,
                        message: "미성년자는 이용하실 수 없어요.",
                    },
                }}
            />
            <Button type="submit" css={styles.btn}>
                제출
            </Button>
        </form>
    );
};

export default FirstForm;
