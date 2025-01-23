import { Button, Col, Flex } from 'antd';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useAddAcademicFacultyMutation } from '../../../redux/features/admin/academicManagement.api';
import { toast } from 'sonner';
import { TResponse } from '../../../types';
import { TAcademicFaculty } from '../../../types/academicManagement.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicFacultySchema } from '../../../schemas/academicManagement.schema';

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const facultyData = {
      name: data.name,
    };

    try {
      const res = (await addAcademicFaculty(facultyData)) as TResponse<
        TAcademicFaculty | any
      >;

      if (res.error) {
        toast.error(`${data.name} ${res.error.data.message}`, { id: toastId });
      } else {
        toast.success(res.data.message, { id: toastId });
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId });
    }
  };

  return (
    <div>
      <h2>Create Academic Faculty</h2>
      <Flex justify="center" align="center">
        <Col sm={18} lg={8}>
          <PHForm
            onSubmit={onSubmit}
            resolver={zodResolver(academicFacultySchema)}
          >
            <PHInput type="text" name="name" label="Name" />
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicFaculty;
