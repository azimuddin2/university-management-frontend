import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api';
import { TAcademicSemester } from '../../../types/academicManagement.type';
import { useState } from 'react';
import { TQueryParam } from '../../../types';

type TTableData = Pick<
  TAcademicSemester,
  'name' | 'year' | 'startMonth' | 'endMonth'
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: semesterData, isFetching } = useGetAllSemestersQuery(params);

  const tableData = semesterData?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      key: _id,
      name,
      year,
      startMonth,
      endMonth,
    }),
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Summar',
          value: 'Summar',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
      ],
    },
    {
      title: 'Year',
      key: 'year',
      dataIndex: 'year',
      filters: [
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
        {
          text: '2027',
          value: '2027',
        },
        {
          text: '2028',
          value: '2028',
        },
        {
          text: '2029',
          value: '2029',
        },
        {
          text: '2030',
          value: '2030',
        },
      ],
      defaultSortOrder: 'descend',
      sorter: (a, b) => Number(a.year) - Number(b.year),
    },
    {
      title: 'Start Month',
      key: 'startMonth',
      dataIndex: 'startMonth',
    },
    {
      title: 'End Month',
      key: 'endMonth',
      dataIndex: 'endMonth',
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
    filters,
    _sorter,
    extra,
  ) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: 'name', value: item }),
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: 'year', value: item }),
      );

      setParams(queryParams);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '12px' }}>Academic Semesters</h2>
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

export default AcademicSemester;
