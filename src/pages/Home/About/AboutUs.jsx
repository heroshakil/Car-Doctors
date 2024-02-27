import services from "../../../assets/images/about_us/aboutUs.jpg"


const AboutUs = () => {
    return (
        <div>
            <div className=" text-center text-3xl text-orange-500 font-bold p-10 ">
                <h2 className="p-5 border-b-[3px]">About Us </h2>
            </div>
            <div className=" ">
                <img className="w-full h-4/6 rounded-xl" src={services} alt="" />
            </div>
            <div className="">
            <p className="pt-10"> Business Inspection BD is a digital media platform and a brand by Inspection, owned by Backspace International Ltd. <br />
                Similar to other Inspection brands, Business Inspection BD aims at creating quality infotainment for the audiences in Bangladesh. Business Inspection BD focuses on research, case studies, analysis, news, facts, and updates on Bangladesh’s business, finance, economy, industries, startup, and retail.
            </p>
            <br />

            <p>       BIBD started its journey in 2019. We identified that there is a lack of information available, especially in the context of Bangladesh’s business, economics, and finance. In addition to that, the business education system lacks sufficient tools and knowledge of the business world. Our team has also found a great insufficiency in quality infotainment and unbiased reporting of the information.</p>
            <br />
            <p>     Bangladesh has recently upgraded its status from the lower-middle income category to a developing country, and also remarked as one of the fastest-growing economies in the world. Local startups are also experiencing growth and getting international exposure. Thus, the Inspection Team came up with the idea and the vision to educate mass audiences about how businesses and corporations around the world work, through Business Inspection BD.</p>
            <br />
            <p className="pb-10">  The goal of BIBD is to inspire business oriented youth who want to start their own venture and involve themselves in the business world. Since our parent company is located in Bangladesh and our initial team was from there, we felt the responsibility to educate the audiences from our local community.</p>
            </div>



        </div>
    );
};

export default AboutUs;