import { Button, Col, Flex } from 'antd';
import PHForm from '../../../components/form/PHForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHSelect from '../../../components/form/PHSelect';
import { departmentOptions } from '../../../constants/department';
import {
  useAddAcademicDepartmentMutation,
  useGetAllAcademicFacultyQuery,
} from '../../../redux/features/admin/academicManagement.api';
import { TResponse } from '../../../types';
import { toast } from 'sonner';
import { TAcademicDepartment } from '../../../types/academicManagement.type';

const CreateAcademicDepartment = () => {
  const { data: academicFacultiesData, isLoading } =
    useGetAllAcademicFacultyQuery(undefined);

  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

  const facultiesOptions = academicFacultiesData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const departmentData = {
      name: data.department,
      academicFaculty: data.academicFaculty,
    };

    try {
      const res = (await addAcademicDepartment(departmentData)) as TResponse<
        TAcademicDepartment | any
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
      <h2>Create Academic Department</h2>
      <Flex justify="center" align="center">
        <Col sm={18} lg={8}>
          <PHForm
            onSubmit={onSubmit}
            // resolver={zodResolver(academicSemesterSchema)}
          >
            <PHSelect
              label="Department"
              name="department"
              options={departmentOptions}
            />
            <PHSelect
              label="Academic Faculty"
              name="academicFaculty"
              options={facultiesOptions}
              disabled={isLoading}
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

export default CreateAcademicDepartment;
