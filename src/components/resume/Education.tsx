interface EducationProps {
    college: string;
    degree: string;
    cgpa: string;
}

const Education = ({ college, degree, cgpa }: EducationProps) => (
    <div style={{ padding: '8px 16px 0 16px' }}>
        <div>{college}</div>
        <div>{degree}</div>
        <div>CGPA: {cgpa}</div>
    </div>
);

export default Education;