import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
    const {data} = useGetAllSemestersQuery(undefined);
    console.log(data)

    return (
        <div>
            <h2>Academic Semester View</h2>
        </div>
    );
};

export default AcademicSemester;