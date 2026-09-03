const portfolioData = {
  profile: {
    name: 'DevOps Engineer',
    title: 'DevOps Engineer',
    tagline: 'Building scalable, reliable infrastructure and automating deployment pipelines',
    summary:
      'I am a passionate DevOps Engineer with expertise in cloud infrastructure, containerization, and CI/CD pipeline automation. I specialize in designing and maintaining scalable systems that enable teams to deploy faster and more reliably.',
    experience: '5+ years',
    projectsCompleted: '20+',
    uptime: '99.9%'
  },
  about: {
    description:
      'With hands-on experience in Kubernetes, Docker, AWS, and modern DevOps tools, I focus on improving deployment processes, reducing downtime, and implementing infrastructure as code practices.',
    highlight:
      'I help teams build resilient systems by combining automation, cloud-native architecture, and operational excellence.'
  },
  skills: {
    categories: [
      {
        name: 'Container & Orchestration',
        items: ['Docker', 'Kubernetes', 'Docker Compose', 'Helm Charts']
      },
      {
        name: 'Cloud Platforms',
        items: ['AWS (EC2, S3, RDS, Lambda)', 'Azure (VMs, App Service, AKS)', 'Google Cloud Platform', 'DigitalOcean']
      },
      {
        name: 'CI/CD & Automation',
        items: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'GitOps (ArgoCD)']
      },
      {
        name: 'Infrastructure as Code',
        items: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
      },
      {
        name: 'Monitoring & Logging',
        items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
      },
      {
        name: 'Programming Languages',
        items: ['Bash/Shell Scripting', 'Python', 'Go', 'YAML']
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: 'Kubernetes Multi-Cluster Setup',
      tag: 'Kubernetes',
      description:
        'Designed and implemented a multi-cluster Kubernetes infrastructure with auto-scaling, ingress management, and GitOps deployment strategies.',
      client: 'Fortune 500 Tech Company',
      duration: '6 months',
      outcome: '99.99% uptime, 40% reduction in deployment time',
      technologies: ['Kubernetes', 'ArgoCD', 'Helm', 'Calico', 'AWS']
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Automation',
      tag: 'CI/CD',
      description:
        'Built comprehensive CI/CD pipelines with automated testing, security scanning, and containerized deployments. Reduced deployment time by 70%.',
      client: 'SaaS Startup',
      duration: '4 months',
      outcome: '70% reduction in deployment time, zero-downtime releases',
      technologies: ['Jenkins', 'Docker', 'GitLab CI', 'SonarQube']
    },
    {
      id: 3,
      title: 'Infrastructure as Code - AWS',
      tag: 'IaC',
      description:
        'Provisioned scalable AWS infrastructure using Terraform with modular, reusable configurations. Managed environments for dev, staging, and production.',
      client: 'E-commerce Platform',
      duration: '3 months',
      outcome: '30% cost reduction, fully automated infrastructure',
      technologies: ['Terraform', 'AWS', 'Ansible', 'CloudFormation']
    },
    {
      id: 4,
      title: 'Monitoring & Alerting Stack',
      tag: 'Monitoring',
      description:
        'Implemented end-to-end monitoring and alerting infrastructure with Prometheus, Grafana, and AlertManager for real-time metrics.',
      client: 'Financial Services Company',
      duration: '2 months',
      outcome: '99.9% uptime SLA, reduced MTTR by 50%',
      technologies: ['Prometheus', 'Grafana', 'AlertManager', 'Node Exporter']
    },
    {
      id: 5,
      title: 'Containerized Microservices Migration',
      tag: 'Docker',
      description:
        'Migrated monolithic applications to containerized microservices architecture using Docker and service mesh technologies.',
      client: 'Enterprise Software Company',
      duration: '8 months',
      outcome: '60% faster deployments, improved scalability',
      technologies: ['Docker', 'Istio', 'gRPC', 'Jaeger']
    },
    {
      id: 6,
      title: 'Log Aggregation & Analysis',
      tag: 'Logging',
      description:
        'Set up centralized logging infrastructure using the ELK Stack to analyze application and infrastructure logs at scale.',
      client: 'Media & Broadcasting Company',
      duration: '3 months',
      outcome: 'Centralized logging for 100+ services',
      technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Filebeat']
    }
  ],
  contact: {
    email: 'hello@example.com',
    linkedin: 'https://www.linkedin.com/in/yourprofile',
    github: 'https://github.com/yourprofile',
    location: 'Singapore'
  }
};

module.exports = { portfolioData };
