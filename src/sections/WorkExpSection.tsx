import SectionHeading from "../components/SectionHeading"
function WorkExpSection() {
    let experience = [
        {
            companyName: "Fusion Technology aka NOVA",
            role: "Full Stack Developer Intern",
            dateRange: "May 2021 - August 2021",
            details: {
                intro: "During the internship, I collaborated with experienced developers, solving real-world problems and applying academic knowledge to practical projects, contributing to the team's productivity and gaining valuable insights into software development practices. Following are the things that I learned and worked on",
                bulletPoints: [
                    "Learned about Agile methodologies and Scrum framework",
                    "Learned about CI/CD pipelines and Docker containers",
                    "Developed RESTful API endpoints for BoxD clone using Express.js",
                    "Developed frontend app using React.js & Redux Toolkit & Firebase",
                ]
            }
        },
        {
            companyName: "Fusion Technology aka NOVA",
            role: "Software Developer I",
            dateRange: "August 2021 - Continuing",
            details: {
                intro: `I started tenure at NOVA as a senior software developer, assigned to the BOLDA project, which involves aggregating furniture data from more than 20 websites. Alongside my development responsibilities, I also assumed the role of a moderator for this project.<br>In December, I transitioned to another internal project team. This project's goal was to incorporate Modern Large Language Models into our current projects. It remains an ongoing research endeavor. During my participation, I contributed to multiple facets including problem identification, data collection, data cleaning, and model training.
                `,
                bulletPoints: [
                    "Learned professional data scraping using puppeteer",
                    "Learned effective debugging and problem-solving skills",
                    "Worked with end Client and developed client-facing skills",
                    "Learned about Modern Large Language Models and their applications in real-world projects",
                ]
            }
        }
    ]

    return (

        <div className='min-h-screen h-screen' >
            <div className="h-[15%] w-full flex border">
                <SectionHeading> Experience</SectionHeading>
            </div>
            <div className="h-[85%] text-white border-2 flex flex-row">

            </div>
        </div>
    )
}

export default WorkExpSection
