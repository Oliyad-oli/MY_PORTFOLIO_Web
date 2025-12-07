import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Vue.js", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "GraphQL", level: 75 },
  ],
  tools: [
    { name: "Git", level: 92 },
    { name: "Docker", level: 78 },
    { name: "AWS", level: 72 },
    { name: "Figma", level: 85 },
    { name: "CI/CD", level: 80 },
  ],
};

const techLogos = [
  "⚛️", "📘", "🟢", "🍃", "🐳", "☁️", "🔥", "⚡", "🎨", "🚀"
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              {'<skills>'}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of technologies I've mastered over the years to build 
              exceptional digital products.
            </p>
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-16 flex-wrap"
          >
            {techLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 glass rounded-xl flex items-center justify-center text-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-xl font-display font-bold mb-6 capitalize text-gradient">
                  {category}
                </h3>
                <div className="space-y-5">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, hsl(var(--neon-cyan)) 0%, hsl(var(--neon-magenta)) 100%)`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <span className="text-primary font-mono text-sm mt-8 block text-center">
            {'</skills>'}
          </span>
        </div>
      </div>
    </section>
  );
}