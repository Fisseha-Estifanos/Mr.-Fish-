export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "generative-ai",
    label: "Generative AI & LLMs",
    skills: [
      "RAG (Retrieval-Augmented Generation)",
      "LangChain",
      "Vector Databases",
      "LLMs (OpenAI, Gemini, Anthropic)",
      "Prompt Engineering",
      "Embeddings & Semantic Search",
      "AI Agent Architectures",
    ],
  },
  {
    id: "data-science",
    label: "Data Science & Machine Learning",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "SQL",
      "Predictive Modeling",
      "NLP",
      "Statistical Analysis",
      "Causal Inference",
    ],
  },
  {
    id: "data-engineering",
    label: "Data Engineering & Infrastructure",
    skills: [
      "ELT / ETL Pipeline Design",
      "Apache Airflow",
      "Apache Spark",
      "Apache Kafka",
      "dbt",
      "Great Expectations",
      "DVC",
      "PostgreSQL",
      "MLflow",
    ],
  },
  {
    id: "fullstack",
    label: "Full-Stack Engineering",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "Streamlit",
      "React & Next.js",
      "TypeScript",
      "Node.js",
      "HTML5 / CSS3 / JavaScript",
      "REST API Design",
      "Docker",
      "Git / GitHub",
      "CI/CD (GitHub Actions)",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda, RDS)",
      "Google Cloud Platform",
      "Linux / Bash",
      "GitHub Actions",
    ],
  },
  {
    id: "analytics-viz",
    label: "Analytics & Visualisation",
    skills: ["Redash", "Streamlit Dashboards", "Jupyter Notebooks"],
  },
  {
    id: "consulting",
    label: "Consulting & Strategy",
    skills: [
      "Technical Audits",
      "Architecture Roadmapping",
      "Fractional CTO",
      "Stakeholder Communication",
      "Team Mentoring",
    ],
  },
];

// Flat list for the trust strip marquee
export const trustStripSkills = [
  "Python",
  "Generative AI & RAG",
  "LangChain & Vector Databases",
  "FastAPI & Full-Stack",
  "PostgreSQL",
  "Apache Airflow & dbt",
  "Cloud Architecture (AWS / GCP)",
  "Machine Learning",
  "Data Pipelines & ELT",
  "Streamlit Dashboards",
  "TypeScript",
  "Docker",
];
