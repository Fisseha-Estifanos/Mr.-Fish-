export interface Project {
  id: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  caseStudyHref?: string;
}

export const projects: Project[] = [
  {
    id: "rag-pipeline",
    category: "Generative AI · RAG Architecture",
    challenge:
      "A client needed an intelligent document retrieval system capable of answering domain-specific questions accurately — without hallucination — over a large proprietary knowledge base.",
    solution:
      "Designed and built a production RAG pipeline with vector store indexing, semantic chunking, and retrieval-augmented generation. Implemented a modular architecture allowing the client to swap embedding models and LLM providers without rebuilding the system.",
    result:
      "Delivered a fully operational AI assistant with measurable retrieval accuracy — replacing hours of manual document search with sub-second contextual answers.",
    stack: ["Python", "RAG", "Vector Databases", "FastAPI", "LLMs", "AWS"],
    caseStudyHref: "https://github.com/Fisseha-Estifanos/red_nucleus_experimental",
  },
  {
    id: "logistics-optimisation",
    category: "Causal Inference · Logistics · FinTech",
    challenge:
      "Gokada — Nigeria's largest last-mile delivery service — faced a critical operational problem: drivers were positioned suboptimally across Lagos, resulting in high rates of unfulfilled delivery requests and lost revenue for both the company and its driver partners.",
    solution:
      "Applied causal inference methods to identify the root causes of unfulfilled requests, then built a logistic optimisation model recommending strategic driver placement across city zones — using historical trip data, driver behaviour patterns, and geospatial analysis.",
    result:
      "Produced a data-driven placement strategy with quantified improvement projections for fulfilment rates, directly tied to driver income and platform revenue.",
    stack: ["Python", "Causal Inference", "Geospatial Analysis", "DVC", "GitHub Actions", "Jupyter"],
    caseStudyHref: "https://github.com/Fisseha-Estifanos/delivery_drivers",
  },
  {
    id: "telecom-analytics",
    category: "Data Analytics · Telecommunications",
    challenge:
      "A telecommunications company had extensive customer and network usage data but no systematic way to extract business insight — leaving strategic decisions based on intuition rather than evidence.",
    solution:
      "Built a full analytics pipeline from raw data ingestion through to an interactive Streamlit dashboard — covering customer segmentation, usage pattern analysis, and operational KPIs — giving the analytics team a single, live source of truth.",
    result:
      "Delivered an operational analytics dashboard enabling the business team to self-serve data questions, reducing analysis turnaround from days to minutes.",
    stack: ["Python", "Pandas", "Streamlit", "PostgreSQL", "DVC", "Jupyter"],
    caseStudyHref: "https://github.com/Fisseha-Estifanos/telecom",
  },
  {
    id: "pharma-forecasting",
    category: "Machine Learning · Pharmaceutical · Retail",
    challenge:
      "Rossmann Pharmaceutical needed to forecast sales six weeks in advance across hundreds of store locations — accounting for promotions, competitor proximity, school holidays, and seasonal patterns — to optimise inventory and staffing.",
    solution:
      "Built an end-to-end ML and deep learning forecasting system using Scikit-learn, TensorFlow, and feature engineering pipelines. Trained models on multi-year historical data with full MLOps: reproducible pipelines via DVC and automated retraining workflows.",
    result:
      "Produced a six-week sales forecast with strong predictive accuracy across store types, enabling confident inventory planning and reducing over/under-stocking.",
    stack: ["Python", "Scikit-learn", "TensorFlow", "DVC", "Pandas", "Jupyter"],
    caseStudyHref: "https://github.com/Fisseha-Estifanos/Rossmann-pharmaceuticals",
  },
  {
    id: "elt-pipeline",
    category: "Data Engineering · ELT Pipeline",
    challenge:
      "An organisation needed a scalable, automated data pipeline to extract data from multiple heterogeneous sources, load it into a centralised data warehouse, and transform it into clean, analyst-ready tables — with data quality validation at every step.",
    solution:
      "Architected an end-to-end ELT pipeline using Apache Airflow for orchestration, dbt for in-warehouse transformation, Great Expectations for automated data quality checks, and Redash for business intelligence dashboards on top of PostgreSQL.",
    result:
      "Delivered a fully automated, observable data pipeline — reducing manual reporting effort and giving analysts reliable, validated data on a scheduled refresh cycle.",
    stack: ["Apache Airflow", "dbt", "PostgreSQL", "Redash", "Great Expectations", "Python"],
    caseStudyHref: "https://github.com/Fisseha-Estifanos/ELT",
  },
];
