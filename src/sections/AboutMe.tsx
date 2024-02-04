import Button from '../components/Button'
import StrongSpan from '../components/StrongSpan'
import SectionHeading from '../components/SectionHeading';
export default function AboutMe() {
    return (
        <>
            <div className="flex flex-col h-screen gap-5">
                {/* Top */}
                <div style={{ height: "15%" }} className="border flex justify-center items-center">
                    <div className=" w-full">
                        <SectionHeading>about me</SectionHeading>
                    </div>
                </div>
                {/* bottom */}
                <div style={{ height: "85%" }} className="border flex-wrap flex items-center justify-center">
                    {/* left */}
                    <div data-aos="fade-left" data-aos-delay="0" className="
              h-full flex flex-col justify-around 
              md:w-3/5 md:px-6
              
              ">
                        <p className=" px-2
                  text-[#ABB2BF] text-[17px] text-center 
                  md:text-[19px] md:text-center
                  lg:text-[20px]
                  ">
                            Hello, I am  <StrongSpan>Kashif Kamran!</StrongSpan>
                            <br />
                            <br />
                            I'm a seasoned full-stack developer proficient in <StrongSpan>MERN</StrongSpan> and <StrongSpan>Spring Boot</StrongSpan>, weaving technological magic. Currently, I'm delving into the expansive realm of <StrongSpan>Large Language Models</StrongSpan>, pushing boundaries in software development.
                            <br />
                            <br />
                            Beyond coding, I excel as a <StrongSpan>team player</StrongSpan>, fostering collaborative success. With strong <StrongSpan>communication skills</StrongSpan> and <StrongSpan>effective time management</StrongSpan>, I bring a holistic approach to projects. Let's combine technical prowess with teamwork for transformative solutions.

                        </p>
                        <div className="mt-4 flex flex-row justify-center"
                        >
                            <Button>
                                Read more -{">"}
                            </Button>
                        </div>
                    </div>
                    {/* right */}
                    <div className="

                 h-full w-0 items-center justify-center
                 hidden md:flex
                 md:w-2/5 md:relative md:bottom-20
              ">
                        <div className=" w-[350px] h-[350px] flex justify-center items-center rounded-b-full rounded-tl-full shadow-2xl bg-slate-800 shadow-slate-700 md:w-[300px]">
                            <h1 className="text-[#C778DD] md:text-[288px]">?</h1>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
