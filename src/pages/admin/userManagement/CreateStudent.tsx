import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import { Button, Col, Divider, Row } from 'antd';
import PHSelect from '../../../components/form/PHSelect';
import { bloodGroupOptions, genderOptions } from '../../../constants/global';
import PHDatePicker from '../../../components/form/PHDatePicker';
import {
  useGetAllDepartmentsQuery,
  useGetAllSemestersQuery,
} from '../../../redux/features/admin/academicManagement.api';

const studentDummyData = {
  password: 'student123@',
  student: {
    name: {
      firstName: 'MD.',
      middleName: 'Azim',
      lastName: 'Uddin',
    },
    gender: 'male',
    dateOfBirth: '2000-01-15',
    bloodGroup: 'O+',

    email: 'anisul@gmail.com',
    contactNo: '+12345678901',
    emergencyContactNo: '+10987654321',
    presentAddress: '123 Main Street, Cityville, State, 12345',
    permanentAddress: '456 Another Street, Townsville, State, 67890',

    guardian: {
      fatherName: 'Robert Doe',
      fatherOccupation: 'Engineer',
      fatherContactNo: '+11223344556',
      motherName: 'Jane Doe',
      motherOccupation: 'Teacher',
      motherContactNo: '+998877665540',
    },

    localGuardian: {
      name: 'Uncle Bob',
      occupation: 'Businessman',
      contactNo: '+998877665541',
      address: '789 Guardian Avenue, Metropolis, State, 54321',
    },

    admissionSemester: '67567981646a0c134a68c5d8',
    academicDepartment: '675731aaff1e5c33179d80c5',
  },
};

// !This is only for development
const studentDefaultValues = {
  name: {
    firstName: 'MD.',
    middleName: 'Azim',
    lastName: 'Uddin',
  },
  email: 'mohammadazimuddin274@gmail.com',
  contactNo: '+12345678901',
  emergencyContactNo: '+10987654321',
  presentAddress: '123 Main Street, Cityville, State, 12345',
  permanentAddress: '456 Another Street, Townsville, State, 67890',
  guardian: {
    fatherName: 'Robert Doe',
    fatherOccupation: 'Engineer',
    fatherContactNo: '+11223344556',
    motherName: 'Jane Doe',
    motherOccupation: 'Teacher',
    motherContactNo: '+998877665540',
  },
  localGuardian: {
    name: 'Uncle Bob',
    occupation: 'Businessman',
    contactNo: '+998877665541',
    address: '789 Guardian Avenue, Metropolis, State, 54321',
  },
};

const CreateStudent = () => {
  const { data: semesterData, isLoading: semesterIsLoading } =
    useGetAllSemestersQuery(undefined);

  const { data: departmentData, isLoading: departmentIsLoading } =
    useGetAllDepartmentsQuery(undefined);

  const semesterOptions = semesterData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const departmentOptions = departmentData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append('file name', 'data');
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Divider>Personal Info.</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="First Name*" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.middleName"
                label="Middle Name*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last Name*" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect label="Gender*" name="gender" options={genderOptions} />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker name="dateOfBirth" label="Date Of Birth*" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="Blood Group*"
                name="bloodGroupe"
                options={bloodGroupOptions}
              />
            </Col>
          </Row>

          <Divider>Contact Info.</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="email" name="email" label="Email*" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="contactNo" label="Contact No*" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact No*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present Address*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="Permanent Address*"
              />
            </Col>
          </Row>

          <Divider>Guardian Info.</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherName"
                label="Father Name*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father Contact No*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherName"
                label="Mother Name*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother Contact No*"
              />
            </Col>
          </Row>

          <Divider>Local Guardian Info.</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="localGuardian.name" label="Name*" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.occupation"
                label="Occupation*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.contactNo"
                label="Contact No*"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.address"
                label="Address*"
              />
            </Col>
          </Row>

          <Divider>Academic Info.</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="Admission Semester*"
                name="admissionSemester"
                options={semesterOptions}
                disabled={semesterIsLoading}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="Academic Department*"
                name="academicDepartment"
                options={departmentOptions}
                disabled={departmentIsLoading}
              />
            </Col>
          </Row>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
