import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllAcademicFacultyQuery } from '../../../redux/features/admin/academicManagement.api';
import { TAcademicFaculty } from '../../../types/academicManagement.type';

type TTableData = Pick<TAcademicFaculty, 'name' | 'createdAt'>;

const AcademicFaculty = () => {
  const { data: facultyData, isFetching } =
    useGetAllAcademicFacultyQuery(undefined);

  const tableData = facultyData?.data?.map(({ _id, name, createdAt }) => ({
    key: _id,
    name,
    createdAt,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'CreatedAt',
      key: 'createdAt',
      dataIndex: 'createdAt',
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
  ) => {};

  return (
    <div>
      <h2 style={{ marginBottom: '12px' }}>Academic Faculties</h2>
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

export default AcademicFaculty;
