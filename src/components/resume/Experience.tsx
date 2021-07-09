interface ExperienceProps {
    experience: {
        role: string,
        company: string,
        client: string,
        location: string,
        duration: string,
        responsibilities: string[],
    },
}

const Experience = ({ experience }: ExperienceProps) => <div style={{ padding: '8px 16px', fontSize: '0.85rem', lineHeight: '1.1rem' }}>
    <div><b>{experience.role}</b></div>
    <div>{experience.company}</div>
    <div><b>{experience.client}</b> at <b>{experience.location}</b></div>
    <div style={{ color: '#3f2adb' }}><b>Duration:</b> {experience.duration}</div>
    <ul>
        {experience.responsibilities.map(resp => <li key={resp}>{resp}</li>)}
    </ul>
</div>

export default Experience;