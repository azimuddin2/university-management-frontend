import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllDepartmentsQuery } from '../../../redux/features/admin/academicManagement.api';

type TTableData = {
  name: string;
  academicFacultyName: string;
};

const AcademicDepartment = () => {
  const { data: facultyData, isFetching } =
    useGetAllDepartmentsQuery(undefined);

  const tableData = facultyData?.data?.map(
    ({ _id, name, academicFaculty }) => ({
      key: _id,
      name,
      academicFacultyName: academicFaculty?.name,
    }),
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Department',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Academic Faculty',
      key: 'academicFacultyName',
      dataIndex: 'academicFacultyName',
    },
    {
      title: 'Action',
      render: () => {
        return (
          <div>
            <Button type="primary" ghost htmlType="submit">
              Update
            </Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    _filters,
    _sorter,
    _extra,
  ) => { };

  return (
    <div>
      <h2 style={{ marginBottom: '12px' }}>Academic Departments</h2>
      <Table<TTableData>
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={{ position: ['bottomCenter'] }}
        scroll={{ x: 'max-content' }}
        showSorterTooltip={{ target: 'sorter-icon' }}
      />
    </div>
  );
};

export default AcademicDepartment;
