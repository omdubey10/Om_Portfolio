import type { IconType } from "react-icons";
import { FaChartBar, FaDatabase, FaRobot, FaUsers } from "react-icons/fa";
import { SiPython, SiPandas, SiNumpy, SiMysql } from "react-icons/si";
import { ExcelIcon, PowerBiIcon, TableauIcon } from "./BrandIcons";

export type SkillNode = {
  name: string;
  icon?: IconType;
  children?: SkillNode[];
  color?: string;
};

export const skillsTreeData: SkillNode = {
  name: "Skills",
  color: "#ffffff",
  children: [
    {
      name: "Analytics",
      color: "#8ca83d",
      children: [
        { name: "SQL", icon: SiMysql, color: "#4479A1" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Excel", icon: ExcelIcon, color: "#217346" },
      ],
    },
    {
      name: "BI & viz",
      color: "#4ab5bd",
      children: [
        { name: "Power BI", icon: PowerBiIcon, color: "#F2C811" },
        { name: "Power Query", icon: FaDatabase, color: "#F2C811" },
        { name: "DAX", icon: FaChartBar, color: "#F2C811" },
        { name: "Tableau", icon: TableauIcon, color: "#E97627" },
      ],
    },
    {
      name: "AI & automation",
      color: "#9b56bf",
      children: [
        { name: "n8n", icon: FaRobot, color: "#EA4B71" },
        { name: "LLMs", icon: FaRobot, color: "#d2ff00" },
        { name: "RAG", icon: FaDatabase, color: "#8ab4f8" },
        { name: "APIs", icon: FaDatabase, color: "#00d4ff" },
      ],
    },
    {
      name: "Business analysis",
      color: "#bfb256",
      children: [
        { name: "KPI Analysis", icon: FaChartBar, color: "#d2ff00" },
        { name: "Agile / Scrum", icon: FaUsers, color: "#61DAFB" },
        { name: "Requirements", icon: FaUsers, color: "#e2e0d4" },
        { name: "Stakeholders", icon: FaUsers, color: "#a8c400" },
      ],
    },
  ],
};
