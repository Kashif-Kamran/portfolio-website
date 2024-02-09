const Skill = ({ title, languages, delay, animation }: SkillProps) => {
    return (
        <div data-aos={animation} className="w-[30%] sm:w-[45%] lg:w-[30%]  border border-[#ABB2BF]" data-aos-delay={delay}>
            <div className=" p-2 bg-[#C778DD33]">
                <h2 className=" font-semibold">{title}</h2>
            </div>
            <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                {languages.map((e, index) => {
                    return <span key={index} className=" w-64 px-2 py-[2px] rounded-md max-w-[100%] overflow-hidden border-b-[1px] border-gray-500 hover:text-[110%] hover:shadow-sm  transition-all duration-300"> {"> "} {e}</span>;
                })}
            </div>
        </div>
    );
}

export default Skill;
type SkillProps = {
    title: string;
    languages: string[];
    delay: number;
    animation: string;
}