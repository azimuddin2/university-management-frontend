import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { monthOptions } from "../../../constants/global";
import { semesterOptions } from "../../../constants/semester";
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
    value: String(currentYear + number),
    label: String(currentYear + number)
}));

const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const name = semesterOptions[Number(data?.name) - 1].label;

        const semesterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth,
        };
        console.log(semesterData);
    };

    return (
        <div>
            <h2>Create Academic Semester</h2>
            <Flex justify="center" align="center">
                <Col sm={18} lg={8}>
                    <PHForm
                        onSubmit={onSubmit}
                        resolver={zodResolver(academicSemesterSchema)}
                    >
                        <PHSelect
                            label="Name"
                            name="name"
                            options={semesterOptions}
                        />
                        <PHSelect
                            label="Year"
                            name="year"
                            options={yearOptions}
                        />
                        <PHSelect
                            label="Start Month"
                            name="startMonth"
                            options={monthOptions}
                        />
                        <PHSelect
                            label="End Month"
                            name="endMonth"
                            options={monthOptions}
                        />
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </PHForm>
                </Col>
            </Flex>
        </div>
    );
};

export default CreateAcademicSemester;