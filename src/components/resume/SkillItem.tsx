interface SkillItemProps {
    skill: string;
    rating: number;
}

const SkillItem = ({ skill, rating }: SkillItemProps) => (
    <div style={{ marginBottom: 8 }}>
        <div style={{ marginBottom: -8, fontSize: '0.85rem' }}>{skill}</div>
        <progress max="10" value={rating} />
    </div>
);

export default SkillItem;