import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee, Zap } from "lucide-react";

export function AboutSection() {
  const highlights = [
    { icon: Calendar, label: "5+ Years", desc: "Coding Experience" },
    { icon: Coffee, label: "1000+", desc: "Cups of Coffee" },
    { icon: Zap, label: "24/7", desc: "Passion for Code" },
    { icon: MapPin, label: "Remote", desc: "Working Globally" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-72 h-72 border-2 border-primary/30 rounded-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-72 h-72 border-2 border-secondary/30 rounded-2xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Main Image Container */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden glass p-2">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">👨‍💻</div>
                      <p className="text-muted-foreground font-mono text-sm">
                        // Add your photo here
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 glass rounded-xl p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-2xl font-display font-bold text-gradient">5+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-mono text-sm mb-4 block">
                {'<about>'}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Crafting Digital
                <span className="text-gradient"> Experiences</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with expertise in building 
                  scalable web applications using the MERN stack. My journey in tech 
                  started 5 years ago, and I've been hooked ever since.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating intuitive 
                  user experiences. When I'm not coding, you'll find me exploring new 
                  technologies, contributing to open source, or sharing knowledge with 
                  the developer community.
                </p>
              </div>
              <span className="text-primary font-mono text-sm mt-4 block">
                {'</about>'}
              </span>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-4 group hover:border-primary/50 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <div className="font-display font-bold text-lg">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}