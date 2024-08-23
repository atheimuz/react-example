import { ReactNode, useState } from "react";
import { useNavigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import { InfoProps } from "@components/funnel/models";
import Job from "@components/funnel/Job";
import JobDetail from "@components/funnel/JobDetail";
import Date from "@components/funnel/Date";
import Confirm from "@components/funnel/Confirm";

const FunnelPage = (): ReactNode => {
    const navigate = useNavigate();
    const [info, setInfo] = useState<InfoProps>({
        job: null,
        jobDetail: null,
        date: null,
    });

    const onChangeValue = ({
        key,
        value,
        path,
    }: {
        key: string;
        value: string;
        path: string;
    }) => {
        setInfo((prev: InfoProps) => ({ ...prev, [key]: value }));
        navigate(path);
    };

    return (
        <div>
            <Date
                job={info.job}
                onNext={(value: string) =>
                    onChangeValue({
                        key: "date",
                        value,
                        path: "/funnel/confirm",
                    })
                }
            />
            <Routes>
                <Route
                    path="jobDetail"
                    element={
                        <JobDetail
                            job={info.job}
                            onNext={(value: string) =>
                                onChangeValue({
                                    key: "jobDetail",
                                    value,
                                    path: "/funnel/jobDetail?modal=date",
                                })
                            }
                        />
                    }
                />
                <Route path="confirm" element={<Confirm info={info} />} />
                <Route
                    path="*"
                    element={
                        <Job
                            onNext={(value: string) =>
                                onChangeValue({
                                    key: "job",
                                    value,
                                    path: "/funnel/jobDetail",
                                })
                            }
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default FunnelPage;
