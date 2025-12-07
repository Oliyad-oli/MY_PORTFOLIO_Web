import { motion } from "framer-motion";
import { Code2, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PortfolioFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-lg text-gradient">
                Alex Chen
              </span>
            </motion.a>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
              <span>by Alex Chen © {new Date().getFullYear()}</span>
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>

          {/* Tech Stack Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-8 border-t border-border/30"
          >
            <p className="text-xs text-muted-foreground font-mono">
              Built with React • TypeScript • Tailwind CSS • Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}