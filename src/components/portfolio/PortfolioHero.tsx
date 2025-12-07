import { motion } from "framer-motion";
import { ArrowDown, Terminal, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PortfolioHero() {
  const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 hex-pattern" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-neon-cyan/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-neon-magenta/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-3xl animate-morph"
      />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
            </span>
            <span className="text-sm text-muted-foreground">Available for Work</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Alex Chen</span>
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Terminal className="w-6 h-6 text-primary" />
            <span className="text-xl md:text-2xl font-mono text-muted-foreground">
              &lt;
            </span>
            <motion.span
              className="text-xl md:text-2xl font-mono text-primary"
              key={roles[0]}
            >
              {roles[0]}
            </motion.span>
            <span className="text-xl md:text-2xl font-mono text-muted-foreground">
              /&gt;
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I craft digital experiences that blend creativity with cutting-edge technology.
            Specializing in React, Node.js, and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold glow-cyan"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                View My Work
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-6 text-lg font-semibold border-border hover:border-primary/50 hover:bg-muted/30"
            >
              <Code2 className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              Download CV
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}