import { Button, Col, Flex } from 'antd';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { monthOptions } from '../../../constants/global';
import { semesterOptions } from '../../../constants/semester';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from '../../../schemas/academicManagement.schema';
import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/academicManagement.api';
import { toast } from 'sonner';
import { TResponse } from '../../../types/global.type';
import { TAcademicSemester } from '../../../types/academicManagement.type';

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const name = semesterOptions[Number(data?.name) - 1].label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse<
        TAcademicSemester | any
      >;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success(res.data.message, { id: toastId });
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId });
    }
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
            <PHSelect label="Name" name="name" options={semesterOptions} />
            <PHSelect label="Year" name="year" options={yearOptions} />
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicSemester;
