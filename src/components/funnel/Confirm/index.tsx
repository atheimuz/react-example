import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import { FaUserCircle, FaSchool, FaBuilding, FaCalendar } from "react-icons/fa";
import Step from "@components/funnel/Step";
import StepItem from "@components/funnel/StepItem";
import { InfoProps } from "@components/funnel/models";

const Confirm = ({
    path,
    info,
}: {
    path: string;
    info: InfoProps;
}): ReactNode => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Step path={path}>
            <Step.Title>입력하신 정보를 확인해 주세요.</Step.Title>
            <Step.Content>
                <ul>
                    <StepItem
                        title="직업"
                        value={info.job}
                        icon={<FaUserCircle />}
                        onClick={() => navigate("/funnel/job")}
                    />

                    <StepItem
                        title={{ student: "학교", employee: "회사" }[info.job]}
                        value={info.jobDetail}
                        icon={
                            { student: <FaSchool />, employee: <FaBuilding /> }[
                                info.job
                            ]
                        }
                        onClick={() => navigate("/funnel/jobDetail")}
                    />
                    <StepItem
                        title={
                            { student: "입학년도", employee: "입사년도" }[
                                info.job
                            ]
                        }
                        value={info.date}
                        icon={<FaCalendar />}
                        onClick={() =>
                            navigate(`${location.pathname}?modal=date`)
                        }
                    />
                </ul>
            </Step.Content>
        </Step>
    );
};

export default Confirm;
