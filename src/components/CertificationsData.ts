export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  color: string;
  image: string;
  imagePosition?: string;
  credentialUrl?: string;
}

export const certificationsData: Certification[] = [
  {
    id: "lnct-campus",
    name: "LNCT Campus, Bhopal",
    issuer: "LNCT Excellence",
    date: "B.Tech CSE",
    color: "#7eb6ff",
    image: "/work/lnct-campus.jpg",
  },
  {
    id: "hospital-ops",
    name: "Hospital Operations Analysis",
    issuer: "Power BI",
    date: "Dashboard",
    color: "#38bdf8",
    image: "/work/hospital-ops-analysis.png",
  },
  {
    id: "hospital-revenue",
    name: "Revenue & Data Quality",
    issuer: "Power BI",
    date: "Dashboard",
    color: "#22c55e",
    image: "/work/hospital-revenue.png",
  },
  {
    id: "hospital-overview",
    name: "Hospital Operations Overview",
    issuer: "Power BI",
    date: "Jan–Sep 2026",
    color: "#818cf8",
    image: "/work/hospital-overview.png",
  },
  {
    id: "bizlytics-home",
    name: "Bizlytics AI",
    issuer: "Product",
    date: "Landing",
    color: "#8b5cf6",
    image: "/work/bizlytics-home.png",
    imagePosition: "top",
  },
  {
    id: "bizlytics-start",
    name: "Bizlytics AI",
    issuer: "Product",
    date: "Get Started",
    color: "#6366f1",
    image: "/work/bizlytics-start.png",
    imagePosition: "center",
  },
  {
    id: "25xglobal",
    name: "Data Analyst Intern",
    issuer: "25XGlobal",
    date: "Mar 2026 – Present",
    color: "#a8c400",
    image: "/work/25xglobal.svg",
  },
  {
    id: "powerbi",
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "Certified",
    color: "#f2c811",
    image: "/work/powerbi-cert.svg",
  },
  {
    id: "aws",
    name: "Data Engineering on AWS: Foundations",
    issuer: "AWS",
    date: "2026",
    color: "#ff9900",
    image: "/work/aws-cert.svg",
  },
  {
    id: "deloitte",
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    date: "2025",
    color: "#86bc25",
    image: "/work/deloitte-cert.svg",
  },
  {
    id: "lnct",
    name: "B.Tech Computer Science & Engineering",
    issuer: "LNCT Excellence, Bhopal",
    date: "2022–2026 · CGPA 6.5",
    color: "#7eb6ff",
    image: "/work/lnct.svg",
  },
  {
    id: "kv",
    name: "Higher Secondary (Mathematics)",
    issuer: "Kendriya Vidyalaya No. 2, Chhindwara",
    date: "2021–2022 · 76.6%",
    color: "#d2ff00",
    image: "/work/kv-school.svg",
  },
];
