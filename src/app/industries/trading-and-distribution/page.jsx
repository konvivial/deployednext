"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import {
  mdiArrowRight,
  mdiArrowTopRight,
  mdiBullseyeArrow,
  mdiDomain,
} from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import Testimonial from "@/sections/testimonial/Testimonial";

import inforCloudSuite from "../../../../public/inforCloudSuite.png";
import Testimonials from "@/sections/testimonial/Testimonial";
import puzzle from "../../../../public/upgradeCloud/puzzle.png";

import Dynamic365 from "../../../../public/Dynamic365.png";
import Oracle from "../../../../public/Oracle.png";
import checkout from "../../../../public/checkout.png";
import MLExpertise from "../../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import { AnimatePresence, motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Benefits from "@/components/Benefits";
import Capabilities from "@/components/Capabilities";
import Expertise from "@/components/Expertise";
import clsx from "clsx";
import { NewTestimonial, OfferingsSlider } from "@/components";
const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};
const ConsiderRPA = [
  {
    _id: 1,
    title: "Increase Productivity",
    desc: "Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/IncreasedProductivity.png",
  },
  {
    _id: 2,
    title: "Gain Accurate Outcomes",
    desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
  },
];
const ChoiceSlider = [
  {
    _id: 1,
    imgUrl: "Industry-Spotlight-Manufacturing",
    title: "Manufacturing",
    desc: "",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Industry-Spotlight-Retail",
    title: "Retail",
    desc: "",
    url: "/",
  },
  {
    _id: 3,
    title: "Trading and Distribution",
    desc: "",
    imgUrl: "Industry-Spotlight-rading-and-Distribution",
    url: "/",
  },
  {
    _id: 4,
    title: "Healthcare ",
    desc: "",
    imgUrl: "Industry-served-Healthcare",
    url: "/",
  },
  {
    _id: 5,
    title: "Project ",
    desc: "",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
  },
  {
    _id: 6,
    title: "Professional services",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
];
const lists = [
  {
    id: 1,
    text: "Inadequate Scalability and Availability",
  },
  {
    id: 2,
    text: "Unreliable Backup Storage",
  },
  {
    id: 3,
    text: "Weak Disaster Recovery and Redundancy",
  },
  {
    id: 4,
    text: "Inadequate Data Integrity and Automation Capabilities",
  },
  {
    id: 5,
    text: "Subpar IT Performance",
  },
  {
    id: 6,
    text: "Limited IT Universality and Centralized Monitoring",
  },
  {
    id: 7,
    text: "High Management Costs of IT Infrastructure",
  },
];
const UseCases = [
  {
    _id: 1,
    title: "Consulting ",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Implementation & Rollout",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Upgrade & Migration",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Development & Customization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Training Workshop",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 6,
    title: "Managed Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 7,
    title: "Legacy Modernization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 8,
    title: "Bespoke Applications",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 9,
    title: "License sales and services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 10,
    title: "Data Insights",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
];
const AIOfferings = [
  {
    _id: 1,
    title: "Automation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#E4F8ED",
    btnTheme: "#4F9D73",
    links: [
      {
        title: "Project Monitoring Tools ",
        url: "/",
      },
      {
        title: "Augmented Intelligence ",
        url: "/",
      },
      {
        title: "Budgeting and Forecasting ",
        url: "/",
      },
      {
        title: "Data Driven Analytics ",
        url: "/",
      },

      {
        title: "Quality Control Analysis  ",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Cloud",
    desc: "  ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#EDF1FF",
    btnTheme: "#0745D3",
    links: [
      {
        title: "M365 ",
        url: "/",
      },
      {
        title: "Cloud Consulting",
        url: "/",
      },
      {
        title: "Upgrade/Migrate to cloud",
        url: "/",
      },
      {
        title: "ERP on cloud",
        url: "/",
      },
      {
        title: "Iot Data management in Cloud",
        url: "/",
      },
      {
        title: "DevOps",
        url: "/",
      },
      {
        title: "Cloud Security Solutions for Mfg.",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Transformation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#FFF8E5",
    btnTheme: "#D4A73B",
    links: [
      {
        title: "Architecture Designing  ",
        url: "/",
      },
      {
        title: "Hierarchy Management ",
        url: "/",
      },
      {
        title: "Process Optimization ",
        url: "/",
      },
      {
        title: "Stakeholder work/ role assignment ",
        url: "/",
      },
      {
        title: "Multiple invoicing modes",
        url: "/",
      },
      {
        title: "Customer Experience - CRM and Ecommerce ",
        url: "/",
      },
    ],
  },
];

const BenefitsData = [
  {
    _id: 1,
    icon: "gear",
    title: "Gain competitive edge",
  },
  {
    _id: 2,
    icon: "diamond",
    title: "Streamline operations",
  },
  {
    _id: 3,
    icon: "eyeGear",
    title: "Boost brand value",
  },
  {
    _id: 4,
    icon: "gear",
    title: "Gain competitive edge",
  },
  {
    _id: 5,
    icon: "diamond",
    title: "Streamline operations",
  },
  {
    _id: 6,
    icon: "eyeGear",
    title: "Boost brand value",
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title="Revolutionizing Megaprojects with Advanced IT Services"
        desc="Leading Your Success Way with Intelligent and Futuristic
        Business Solutions"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* section Nav */}
      <>
        <SectionNav
          // Challenges
          // Capabilities
          // Services
          // Industry Verticals
          // Partners

          arr={[
            {
              _id: 1,
              title: "Challenges",
              link: "#Challenges",
            },
            {
              _id: 2,
              title: "Capabilities",
              link: "#Capabilities",
            },
            {
              _id: 3,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 5,
              title: "Partners",
              link: "#Partners",
            },
            {
              _id: 4,
              title: "Industry Verticals",
              link: "#IndustryVerticals",
            },
          ]}
        />
      </>
      {/* Overview  */}
      <>
        <div className={` w-full bg-[#F2F4F7] text-[#101828]`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl   mx-auto p-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            {/* left */}
            <div className=" flex items-start flex-col justify-start mt-10  relative">
              <div className="">
                <h4
                  className={` text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
                >
                  Projects
                </h4>
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Overview
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  By harnessing the power of data analytics, machine learning,
                  and artificial intelligence, our advanced IT services empower
                  project stakeholders with valuable insights. These insights
                  facilitate informed decision-making, enabling teams to
                  proactively address risks and capitalize on opportunities. The
                  result is a catalytic boost in efficiency, significantly
                  reducing project timelines and costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Challengers Para */}
      <>
        <div id="Challenges" className={`mt-[4em]  w-full bg-white`}>
          <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
            <div className=" mb-[2rem]">
              <div className="flex flex-col md:flex-row gap-x-10">
                <h3 className="text-4xl leading-[42px] font-bold">
                  Challenges Encountered by Businesses
                </h3>
                <p>
                  We offer strategic insights, specialized knowledge and
                  experience in helping businesses adapt, grow and thrive.
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="mx-auto">
                <Image src={puzzle} alt="puzzle" />
              </div>
            </div>
            <div>
              <div>
                <ul>
                  {lists.map((list) => (
                    <li key={list.id}>
                      {" "}
                      <p className="flex gap-4 mb-6 border-dashed border-b-2 pb-3 text-base leading-[22px]">
                        <span className="">
                          <Icon
                            path={mdiBullseyeArrow}
                            color="dodgerblue"
                            size={1}
                          />
                        </span>
                        {list.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* services */}
      <>
        <div id="Capabilities" className={` w-full bg-[#FFF] pt-16`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor WMS Key Highlights
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Extending the capabilities of Infor with tailored functional
                  enhancements for enhancement of business productivity
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full pt-32 pb-12 px-[2rem] bg-[url('/bgEcomScreen.png')]`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 justify-center">
            {[
              {
                _id: 0,
                title: "3D Visualization",
                desc: "Experience streamlined operations with Infor WMS's 3D visual warehouse, providing real-time insights into bottlenecks and asset utilization.",
                cta: "",
                link: "",
              },
              {
                _id: 1,
                title: "Advanced Warehousing Processes",
                desc: "Enhance efficiency with RF receiving, voice-enabled pick/pack operations, and dynamic put-away options.",
                cta: "",
                title: "Advanced Warehousing Processes",
                desc: "Enhance efficiency with RF receiving, voice-enabled pick/pack operations, and dynamic put-away options.",
                cta: "",
                link: "",
              },
              {
                _id: 2,
                title: "3PL Billing",
                desc: "Infor WMS integrates advanced activity-based features, enabling precise customer-level costing, billing, and invoicing. It supports multi-warehouse and multi-owner operations with tailored workflows and full traceability.",
                cta: "",
                link: "",
              },
              {
                _id: 3,
                title: "Labor Management & Configurability",
                desc: "The user experience is tailored for productivity, enabling you to measure, assess, and optimize DC activities, identify bottlenecks, and maintain resource balance with engineered labor standards and performance metrics.",
                cta: "",
                link: "",
              },
            ].map((item, index) => {
              return (
                <div key={index} className="mx-5 bg-white ">
                  <div className="p-5 w-fit ">
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                      {item.title}
                    </h4>
                    <p className="text-[14px] leading-[22px] text-[#475467]">
                      {item.desc}
                    </p>
                  </div>
                  <div className="hidden w-full bg-[#0745D3] p-5">
                    <Link
                      href={item.link}
                      className="text-white  flex transition-all hover:opacity-75  "
                    >
                      {item.cta}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits "
        ribbonTxtWhite="true"
        title="AI&ML "
        desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes offering a multitude of benefits that redefine the way we do business."
        arr={[
          {
            _id: 1,
            icon: "benefits-ai-ml/process-analyse",
            cardDesc:
              "Process and analyse vast volumes of data and round-the-clock assistance to customers",
          },
          {
            _id: 2,
            icon: "benefits-ai-ml/anticipate-future",
            cardDesc:
              "Anticipate future outcomes based on historical data, making informed decisions",
          },
          {
            _id: 3,
            icon: "benefits-ai-ml/effortless-communicate",
            cardDesc:
              "Effortless communication and efficient information retrieval through Natural Language Processing",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc:
              "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Revolutionising Healthcare with medical image analysis",
          },
        ]}
      ></Benefits>

      {/* Offerings */}

      {/*  Cards */}
      <>
        <div id="Services" className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Key Feature and Benefits of Infor CRM
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-1">
            {[
              {
                _id: 1,
                title: "Increased Productivity",
                desc: "Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI. Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/IncreasedProductivity.png",
              },
              {
                _id: 2,
                title: "Gain Accurate Outcomes",
                desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services. Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
            ].map((item, index) => (
              <div
                className="flex flex-col sm:flex-row  bg-white"
                key={item._id}
              >
                <Image
                  src={item.image}
                  height={120}
                  width={120}
                  className="w-[100%] sm:w-fit object-cover"
                  alt={item.title}
                />
                <div className="p-4 sm:justify-start sm:flex sm:flex-col w-full">
                  <p className="text-[#101828] font-bold text-[26px] leading-[32px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal mt-2 leading-[22px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.ctaUrl}
                    className="text-[#0745D3] hidden text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                  >
                    {item.cta}{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      {/* Our Partners */}
      <>
        <div id="Partners" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our Partners
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We are your trusted RPA partner, and our experience extends to
                  industry-leading RPA platforms and expertise to customize
                  solutions that fulfil your exclusive business needs
                </p>
              </div>
              <div className="flex justify-center items-center gap-20">
                <div>
                  <Image src={inforCloudSuite} alt="Infor" />
                </div>
                <div>
                  <Image src={Oracle} alt="Infor" />
                </div>
                <div>
                  <Image src={Dynamic365} alt="Infor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Industry Spotlight Slider */}
      <>
        <div id="IndustryVerticals" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Spotlight
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] my-5">
                  Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector.
                </p>
              </div>
              <div className="flex justify-center items-center max-w-screen-xl w-full">
                <div>
                  <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {ChoiceSlider.map((item) => (
                      <>
                        <SwiperSlide
                          key={item._id}
                          className="w-[283px] max-w-[283px] mr-4  relative group"
                        >
                          <div className="relative overflow-hidden">
                            <Image
                              src={`/industrySpotlight/${item.imgUrl}.jpg`}
                              height={350}
                              width={283}
                              alt="icon"
                              className=" transition-transform transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity  ">
                              <h3 className="text-[22px] text-white absolute bottom-4 left-4 w-fit leading-[30px] font-bold mb-5">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Casestudy */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Delivering Results that Matters "
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries. "
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "India's leading TV audience measurement firm employs calibrated RPA bots, reducing manual tasks of channel metrics, efficiently sharing results with stakeholders and saving consultant hours.",
            thumbnail: "1",
            description: "",
            tags: ["Automation"],
            cta: "Read article",
            link: "/",
          },
          {
            id: 2,
            title:
              "Prominent American watch and lifestyle distribution organization achieves heightened uptime, seamless management, positive ROI and enhanced data durability and reliability by transitioning to Azure through a Lift and Shift approach.",
            thumbnail: "2",
            description: "",
            tags: ["Cloud"],
            cta: "Read article",
            link: "/",
          },
          {
            id: 3,
            title:
              "Germany based Automotive Company navigates system complexities and optimizes efficiency with Infor CloudSuite automotive support services from Godrej Infotech",
            thumbnail: "3",
            description: "",
            tags: ["Transformation"],
            cta: "Read article",
            link: "/",
          },
        ]}
      />
      {/* Testimonials */}
      <NewTestimonial
        ribbon="Testimonials"
        ribbonVisible={false}
        title="What Experts Think About Us "
        desc="It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation: "IT Manager",
            thumbnail: "1",
            description:
              "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "Director of Finance, Wildlife Conservation International NGO based in India",
            thumbnail: "1",
            description:
              "We're delighted with the successful D365 implementation executed by talented GITL team. Their collaboration with our team was seamless, ensuring timely delivery. They have dedicated significant effort to grasp our distinctive needs, reinforcing our satisfaction.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation:
              "Project Manager, Investment Holding Company in Riyadh & Dubai",
            thumbnail: "1",
            description:
              "Congratulations to GITL team for successful go-live of Microsoft Business Central SAAS and KSA GITL Add-on HR & Payroll Solution. The key achievement was the seamless integration between Business Central and bio-time attendance machine. Our material requisition efficiency has improved by 66%, purchase order processing time is cut down by 79% and boosted invoicing productivity by 60%.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Expertise */}
      <Expertise
        ribbon="Our Expertise "
        ribbonTxtWhite="true"
        title="Future Outlook with Intelligent Technologies  "
        desc="We are here to build edge and bring technology brilliance with the finest in the industry. Driving the innovation path, we develop better results for businesses across the globe."
        arr={[
          {
            title: "85%",
            desc: "IDC states that 85% of enterprises to merge human expertise with AI, ML& NLP by 2026 ",
          },
          {
            title: "$200B",
            desc: "Forbes forecasts size for AI market by 2026 ",
          },
          {
            title: "$6.6T",
            desc: "PwC Research claims that $6.6T productivity growth is projected by 2030  ",
          },
        ]}
      ></Expertise>

      {/* Subscription */}
      <Subscription
        title="Ready for Transformation with"
        blue="AI and ML?"
        title2=""
        desc="Let's embark on your journey together aligned with your business goals."
      />
    </>
  );
};

export default page;
