import type { IconType } from "react-icons";
import { FaDatabase, FaRobot } from "react-icons/fa";
import { SiPython, SiPandas, SiMysql } from "react-icons/si";
import { ExcelIcon, PowerBiIcon } from "./BrandIcons";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: { name: string; icon: IconType; color: string }[];
  githubUrl?: string;
  liveUrl?: string;
  placeholderColor?: string;
};

export const projectsData: Project[] = [
  {
    id: "hospital-ops",
    title: "Hospital Operations Dashboard",
    description:
      "Analyzed hospital patient, appointment, admission, doctor, and billing data to find revenue trends, patient volume, bottlenecks, and department performance. Validated the data in Excel, cleaned and transformed it with Pandas, queried KPIs in SQL, and built an interactive Power BI dashboard with Power Query.",
    image: "/work/powerbi-cert.svg",
    placeholderColor: "linear-gradient(135deg, #14532d, #052e16)",
    techStack: [
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Power BI", icon: PowerBiIcon, color: "#F2C811" },
    ],
    githubUrl:
      "https://github.com/omdubey10/Hospital-Operations-Business-Analytics-Dashboard",
  },
  {
    id: "bizlytics",
    title: "Bizlytics AI",
    description:
      "AI business advisor that turns a structured business problem into recommendations, KPI insights, and growth opportunities. Prompt engineering, RAG, structured outputs, and APIs keep the analysis relevant and consistent.",
    image: "/work/aws-cert.svg",
    placeholderColor: "linear-gradient(135deg, #1e1b4b, #0f172a)",
    techStack: [
      { name: "LLMs", icon: FaRobot, color: "#d2ff00" },
      { name: "RAG", icon: FaDatabase, color: "#8ab4f8" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "APIs", icon: FaDatabase, color: "#00d4ff" },
    ],
    githubUrl: "https://github.com/omdubey10/Bizlytics-ai",
    liveUrl: "https://bizlytics-ai.vercel.app/",
  },
  {
    id: "n8n-chat",
    title: "AI Chatbox Automation",
    description:
      "n8n workflow that receives a user query, sends it through an AI service, and returns an automated response. Webhooks, APIs, and workflow nodes handle message processing end to end.",
    image: "/work/deloitte-cert.svg",
    placeholderColor: "linear-gradient(135deg, #3f1d38, #1a1020)",
    techStack: [
      { name: "n8n", icon: FaRobot, color: "#EA4B71" },
      { name: "APIs", icon: FaDatabase, color: "#00d4ff" },
      { name: "Webhooks", icon: FaDatabase, color: "#f2c811" },
      { name: "LLMs", icon: FaRobot, color: "#d2ff00" },
    ],
  },
  {
    id: "sales-analysis",
    title: "Customer Sales Analysis",
    description:
      "Customer, product, and sales performance analysis in SQL, with cleaning and validation in Python, Pandas, and NumPy. Exploratory analysis covers sales trends, customer segments, product performance, and business KPIs.",
    image: "/work/lnct.svg",
    placeholderColor: "linear-gradient(135deg, #1e3a8a, #0f172a)",
    techStack: [
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Excel", icon: ExcelIcon, color: "#217346" },
    ],
    githubUrl:
      "https://github.com/omdubey10/Customer-Sales-Performance-Analysis",
  },
];
