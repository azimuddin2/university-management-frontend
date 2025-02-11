import { TQueryParam, TResponseRedux } from '../../../types';
import {
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSemester,
} from '../../../types/academicManagement.type';
import { baseApi } from '../../api/baseApi';

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: '/academic-semesters/create-academic-semester',
        method: 'POST',
        body: data,
      }),
    }),
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/academic-semesters',
          method: 'GET',
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: '/academic-faculties/create-academic-faculty',
        method: 'POST',
        body: data,
      }),
    }),
    getAllAcademicFaculty: builder.query({
      query: () => ({
        url: '/academic-faculties',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: '/academic-departments/create-academic-department',
        method: 'POST',
        body: data,
      }),
    }),
    getAllDepartments: builder.query({
      query: () => ({
        url: '/academic-departments',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const {
  useAddAcademicSemesterMutation,
  useGetAllSemestersQuery,
  useAddAcademicFacultyMutation,
  useGetAllAcademicFacultyQuery,
  useAddAcademicDepartmentMutation,
  useGetAllDepartmentsQuery,
} = academicManagementApi;
