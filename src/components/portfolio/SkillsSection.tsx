import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "HTML5", level: 98 },
    { name: "CSS3", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
  ],

  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "Django", level: 82 },
    { name: "Flask", level: 80 },
    { name: "REST APIs", level: 92 },
    { name: "GraphQL", level: 75 },
  ],

  databases: [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 82 },
    { name: "PostgreSQL", level: 80 },
    { name: "Redis", level: 75 },
  ],

  machineLearning: [
    { name: "Python (ML)", level: 80 },
    { name: "NumPy", level: 78 },
    { name: "Pandas", level: 80 },
    { name: "Scikit-learn", level: 72 },
    { name: "Data Analysis", level: 75 },
  ],

  design: [
    { name: "UI/UX Design", level: 85 },
    { name: "Figma", level: 88 },
    { name: "Wireframing", level: 82 },
    { name: "Prototyping", level: 80 },
  ],

  tools: [
    { name: "VS Code", level: 95 },
    { name: "Git", level: 92 },
    { name: "GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Docker", level: 78 },
    { name: "Linux", level: 80 },
    { name: "AWS", level: 72 },
    { name: "CI/CD", level: 80 },
  ],
};

/* Floating Tech Icons */
const techLogos = [
  { label: "HTML", icon: "📄" },
  { label: "CSS", icon: "🎨" },
  { label: "JS", icon: "⚡" },
  { label: "React", icon: "⚛️" },
  { label: "Node", icon: "🟢" },
  { label: "Python", icon: "🐍" },
  { label: "Django", icon: "🌿" },
  { label: "MongoDB", icon: "🍃" },
  { label: "VS Code", icon: "🧩" },
  { label: "Docker", icon: "🐳" },
];

/* API Badges */
const apiBadges = [
  "RESTful APIs",
  "JWT Authentication",
  "Role-Based Access Control",
  "WebSockets",
  "API Security",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              {"<skills>"}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies, tools, and skills I use to design, develop, and deploy
              modern digital solutions.
            </p>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-16 flex-wrap"
          >
            {techLogos.map((tech, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 glass rounded-xl flex flex-col items-center justify-center text-xs font-semibold"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                }}
                whileHover={{ scale: 1.2, rotate: 8 }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="mt-1">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-xl font-display font-bold mb-6 capitalize text-gradient">
                  {category.replace(/([A-Z])/g, " $1")}
                </h3>

                <div className="space-y-5">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, hsl(var(--neon-cyan)) 0%, hsl(var(--neon-magenta)) 100%)",
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* API Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-gradient">
              API & Backend Experience
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {apiBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full glass text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <span className="text-primary font-mono text-sm mt-12 block text-center">
            {"</skills>"}
          </span>
        </div>
      </div>
    </section>
  );
}
