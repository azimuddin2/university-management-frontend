import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";

const nameOptions = [
    {
        value: "Autumn",
        label: "Autumn",
    },
    {
        value: "Summar",
        label: "Summar",
    },
    {
        value: "Fall",
        label: "Fall",
    },
];

const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const semesterData = {
            name: 'Something',
            code: 'something',
        };
        console.log(semesterData);
    };

    return (
        <div>
            <h2>Create Academic Semester</h2>
            <Flex justify="center" align="center">
                <Col sm={18} lg={8}>
                    <PHForm onSubmit={onSubmit}>
                        <PHSelect label="Name" name="name" options={nameOptions} />
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </PHForm>
                </Col>
            </Flex>
        </div>
    );
};

export default CreateAcademicSemester;