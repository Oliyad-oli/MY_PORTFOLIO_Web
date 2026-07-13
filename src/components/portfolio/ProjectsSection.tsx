import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Tax Audit Management System",
    description:
      "A comprehensive web-based system designed to streamline tax auditing processes, including case assignment, document management, audit tracking, reporting, and workflow automation for auditors and administrators.",
    image: "📊",
    // tags: ["React", "Spring Boot", "MySQL", "REST API"],
    color: "from-neon-cyan/20 to-neon-purple/20",
    github: "https://github.com/Oliyad-oli/tax-audit-management-frontend",
    live: "https://tax-audit-management-frontend.vercel.app/",
  },
  {
    title: "Hospital Management Web System",
    description:
      "A comprehensive healthcare platform for digital medical records, doctor scheduling, patient registration, billing automation, and pharmacy inventory management.",
    image: "🏥",
    // tags: ["React", "Node.js", "MongoDB", "Express"],
    color: "from-neon-purple/20 to-neon-magenta/20",
    github: "https://github.com/Oliyad-oli/forlife_website",
    live: "https://forlife-website-ruddy.vercel.app/",
  },

  {
    title: "School Payment Management System",
    description:
      "A secure school payment platform for managing student fees, tuition payments, receipts, and real-time payment status tracking.",
    image: "🏫",
    // tags: ["React", "Python", "FastAPI", "PostgreSQL"],
    color: "from-neon-green/20 to-neon-cyan/20",
    github: "https://github.com/Oliyad-oli",
    live: "https://school-payment-delta.vercel.app/",
  },
  {
    title: "Crypto Tracker Application",
    description:
      "A real-time cryptocurrency tracker that displays live prices, market trends, portfolio performance, and price alerts using live data streams.",
    image: "₿",
    // tags: ["Vue.js", "Express", "WebSocket", "Chart.js"],
    color: "from-neon-yellow/20 to-neon-magenta/20",
    github: "https://github.com/Oliyad-oli",
    live: "https://crypto-tracker-system.vercel.app/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              {"<projects>"}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for
              creating impactful digital solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                  >
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </span>

                    {/* Overlay on hover */}
                    <motion.div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        className="rounded-full bg-primary text-primary-foreground"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary/50 hover:bg-primary hover:text-primary-foreground"
            >
              <a 
                href="https://github.com/Oliyad-oli" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View All Projects 
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          <span className="text-primary font-mono text-sm mt-8 block text-center">
            {"</projects>"}
          </span>
        </div>
      </div>
      
    </section>
  );
}
