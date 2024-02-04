
import image from "../assets/kashifkamran-profile.png"
import Button from "../components/Button"
import StrongSpan from "../components/StrongSpan"
export default function HeroSection() {


    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen gap-10 mx-6 | md:flex-row |   ">

                {/* Left Image Section */}
                <div
                    className="w-[260px] | sm:w-[300px] | md:w-[300px] | lg:w-[350px]"
                >

                    <img
                        className="rounded-b-full rounded-tr-full shadow-2xl bg-slate-800 shadow-slate-700"
                        src={image} alt=""
                    />

                </div>

                {/* Right Pitch Section */}
                <div
                    className=" | md:w-4/6 | lg:w-3/5 "
                >
                    <h1 className="font-semibold text-center text-white text-[20px] | sm:text-[22px] | md:text-[22px] | lg:text-[28px] ">
                        Hey, this is <StrongSpan>Kashif Kamran</StrongSpan> a programming enthusiast who believes <StrongSpan>Ctrl+C</StrongSpan> and <StrongSpan>Ctrl+V</StrongSpan> are the ultimate superpowers.
                    </h1>

                    <div className="flex justify-center mt-12 ">
                        <Button>
                            Contact me!!
                        </Button>
                    </div>
                </div>
            </div>

        </>
    );
}
