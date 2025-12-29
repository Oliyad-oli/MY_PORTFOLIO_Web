import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-Time Chat Application",
    description:
      "A full-featured real-time chat application with user authentication, private and group messaging, online status, and media sharing.",
    image: "💬",
    // tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    color: "from-neon-cyan/20 to-neon-purple/20",
    github: "https://github.com/Oliyad-oli",
    live: "https://o-dgram-chat-app.vercel.app",
  },
  {
    title: "Issue Reporting Application",
    description:
      "A collaborative issue reporting and tracking system with real-time updates, priority levels, status tracking, and team collaboration.",
    image: "🐞",
    // tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    color: "from-neon-magenta/20 to-neon-yellow/20",
    github: "https://github.com/Oliyad-oli",
    live: "#",
  },
  {
    title: "School Payment Management System",
    description:
      "A secure school payment platform for managing student fees, tuition payments, receipts, and real-time payment status tracking.",
    image: "🏫",
    // tags: ["React", "Python", "FastAPI", "PostgreSQL"],
    color: "from-neon-green/20 to-neon-cyan/20",
    github: "https://github.com/Oliyad-oli",
    live: "",
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
                      {/* {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-muted rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))} */}
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
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary/50 hover:bg-primary hover:text-primary-foreground"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4 ml-2" />
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
