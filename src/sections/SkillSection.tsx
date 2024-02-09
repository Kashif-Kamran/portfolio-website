import Skill from '../components/Skill'
import SectionHeading from '../components/SectionHeading';
export default function SkillSection() {
    const skills = [
        {
            title: "Language",
            languages: ["Typescript", "JavaScript", "Java", "C / C++"],
        },
        {
            title: "Frameworks",
            languages: [
                "MERN Stack(.js/.ts)",
                "Express (.js/.ts)",
                "Spring (.java)",
            ],
        },
        {
            title: "Large Language Models",
            languages: [
                "Data Extraction",
                "Data Creation",
                "Model Quentization",
                "Model Training"
            ]
        },
        {
            title: "Databases",
            languages: [
                "MySQL",
                "Mongo",
                "Oracle"
            ]
        },
        {
            title: "Frontend Libs",
            languages: ["HTML / CSS ", "Tailwind", "Material UI", "JavaFx",],
        },
    ];

    return (
        <>
            <div className="flex flex-col h-screen gap-5">
                {/* top */}
                <div style={{ height: "15%" }} className=" flex justify-center items-center">
                    <div className=" w-full">
                        <SectionHeading>skills</SectionHeading>
                    </div>
                </div>
                {/* bottom */}
                <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
                    <div className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12  gap-4">
                        {skills.map(({ title, languages }, index) => {
                            return (
                                <>
                                    {
                                        index % 2 === 0 ?
                                            <Skill title={title} languages={languages} delay={0} animation={"fade-right"} /> :
                                            <Skill title={title} languages={languages} delay={0} animation={"fade-left"} />
                                    }
                                </>
                            );
                        })}
                    </div>
                </div>
            </div >
        </>
    );
}
