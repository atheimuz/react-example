import { ReactNode } from "react";
import Step from "@components/funnel/Step";
import OptionItem from "@components/funnel/OptionItem";

const JOB_DETAIL_SCHEME = {
    student: ["school1", "school2", "school3"],
    employee: ["company1", "company2", "company3"],
};

const JobDetail = ({
    path,
    job,
    onNext,
}: {
    path: string;
    job: "student" | "employee";
    onNext: (value: string) => void;
}): ReactNode => {
    return (
        <Step path={path}>
            <Step.Title>
                {job === "student" && "학교를 선택해 주세요."}
                {job === "employee" && "회사를 선택해 주세요."}
            </Step.Title>
            <Step.Content>
                <ul>
                    {JOB_DETAIL_SCHEME[job].map((option) => (
                        <OptionItem
                            key={option}
                            title={option}
                            onClick={() => onNext(option)}
                        />
                    ))}
                </ul>
            </Step.Content>
        </Step>
    );
};

export default JobDetail;
