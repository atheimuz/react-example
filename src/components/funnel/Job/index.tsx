import { ReactNode } from "react";
import { FaUserGraduate, FaUserSecret } from "react-icons/fa";
import Step from "@components/funnel/Step";
import OptionItem from "@components/funnel/OptionItem";

const OPTION_ITEMS = [
    { label: "학생", value: "student", icon: <FaUserGraduate /> },
    { label: "직장인", value: "employee", icon: <FaUserSecret /> },
];

const Job = ({
    path,
    onNext,
}: {
    path: string;
    onNext: (value: string) => void;
}): ReactNode => {
    return (
        <Step path={path}>
            <Step.Title>직업을 선택해 주세요.</Step.Title>
            <Step.Content>
                <ul>
                    {OPTION_ITEMS.map((option) => (
                        <OptionItem
                            key={option.value}
                            title={option.label}
                            icon={option.icon}
                            onClick={() => onNext(option.value)}
                        />
                    ))}
                </ul>
            </Step.Content>
        </Step>
    );
};

export default Job;
