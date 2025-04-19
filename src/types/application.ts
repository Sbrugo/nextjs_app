export const countryOptions = [
  "Albania",
  "Andorra",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Belgium",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Brazil",
  "Bulgaria",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Guatemala",
  "Guinea",
  "Guyana",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Kenya",
  "Kosovo",
  "Latvia",
  "Lebanon",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Malta",
  "Mexico",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Morocco",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Norway",
  "Panama",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Venezuela",
  "Vietnam",
] as const;
export type Country = (typeof countryOptions)[number];

export const relocationOptions = ["Yes", "No", "Maybe"] as const;
export type Relocation = (typeof relocationOptions)[number];

export const englishLevelOptions = ["Basic", "Intermediate", "Fluent"] as const;
export type EnglishLevel = (typeof englishLevelOptions)[number];

export const languageOptions = [
  "Catalan",
  "Dutch",
  "French",
  "German",
  "Italian",
  "Polish",
  "Portuguese",
  "Spanish",
  "Other",
] as const;
export type Languages = (typeof languageOptions)[number];

export const jobTypeOptions = [
  "100% Remote",
  "Hybrid",
  "On - Site",
  "Flexible",
] as const;
export type JobType = (typeof jobTypeOptions)[number];

export const visaSponsorshipOptions = ["Yes", "No", "I am not sure"] as const;
export type VisaSponsorship = (typeof visaSponsorshipOptions)[number];

export const skillOptions = [
  "Agile Project Management",
  "Airflow",
  "Angular",
  "Apache",
  "Artificial Intelligence",
  "AWS",
  "AWS Lambda",
  "Azure",
  "Bootstrap",
  "Blue Prism",
  "C#",
  "Cisco",
  "CISSP, CCSP, CCSK",
  "Cloud Formation",
  "Confluence",
  "Continuous Integration/Continuous Deployment (CI/CD)",
  "CrowdStrike",
  "Databricks / Synapse",
  "Docker",
  "ETL",
  "Flutter",
  "Go",
  "Google Cloud Platform (GCP)",
  "Git",
  "Github",
  "HTML",
  "Identity & Access Management (IAM)",
  "Internet of Things (IOT)",
  "ITIL/ITSM",
  "Java",
  "Javascript",
  "Jenkins",
  "Jira",
  "Kotlin",
  "Kubernetes",
  "Linux",
  "Machine Learning",
  "MongoDB",
  "Nessus",
  "NextJs",
  "Node.js",
  "OpenShift",
  "Oracle",
  "PHP",
  "Power BI",
  "Python",
  "Qualys",
  "React",
  "Redux",
  "REST",
  "RESTful",
  "Sailpoint",
  "Selenium",
  "Salesforce",
  "Security Information & Event Management (SIEM) (Splunk, QRadar)",
  "Serenity",
  "ServiceNow",
  "Spark",
  "Splunk",
  "SQL",
  "Swift",
  "Tableau",
  "TensorFlow/PyTorch",
  "Typescript",
  "Terraform",
  "UiPath",
  "VMware",
  "Vue.js",
  "Zephyr",
  ".NET",
  "Other",
] as const;
export type Skills = (typeof skillOptions)[number];

export const roleOptions = [
  "Artificial Intelligence",
  "Back End Developer",
  "Blockchain Developer",
  "Business Intelligence / Business Analyst",
  "Cybersecurity",
  "Cloud Architect",
  "Data Architect",
  "Data Engineer",
  "Data Science",
  "DevOps Engineer",
  "Ethical Hacker / Penetration Tester",
  "Front End Developer",
  "FullStack Developer",
  "IOS / Android Developer",
  "IT Project Manager",
  "IT Security",
  "Machine Learning",
  "Mobile App Developer",
  "Network Engineer",
  "Product Owner",
  "QA Engineer",
  "RPA",
  "Salesforce",
  "SAP Consultant",
  "Scrum Master",
  "ServiceNow Developer/Architect",
  "Software Engineer",
  "Solutions Architect",
  "Other",
] as const;
export type Roles = (typeof roleOptions)[number];

export const leadershipExperienceOptions = [
  "Yes, I have led teams of +10 people.",
  "Yes, I have led teams of fewer than 10 people.",
  "Yes, I have led projects, but not formally managed teams.",
  "No, but I am interested in leadership roles.",
  "No, I do not have leadership experience.",
] as const;
export type LeadershipExperience = (typeof leadershipExperienceOptions)[number];

export const experienceOptions = [
  "0 - 2 years",
  "2 - 5 years",
  "5 - 10 years",
  "10 - 15 years",
  "15 - 20 years",
  "+20 years",
] as const;
export type Experience = (typeof experienceOptions)[number];

export interface application {
  _id: string;
  full_name: string;
  email: string;
  phone: number;
  linkedin: string;
  country: Country;
  city: string;
  relocation: Relocation;
  relocationCountries: Country;
  english_level: EnglishLevel;
  languages: Languages;
  job_type: JobType;
  visa_sponsorship: VisaSponsorship;
  consent: Boolean;
  skills_description: string;
  skills: Skills;
  roles: Roles;
  leadership_experience: LeadershipExperience;
  salary: number;
  hourly_salary: number;
  experience: Experience;
  share: string;
  CV: File | undefined;
}
