import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
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
            {/* Logo Section */}
            <motion.a
              href="#home"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative flex items-center w-10 h-10">
                {/* Circular Logo Image */}
                <img
                  src="/ol.png"
                  alt="Logo"
                  className="h-full w-full object-cover rounded-full z-10"
                />

                {/* Glow Effect behind logo */}
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-full blur-lg"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <span className="font-display font-bold text-lg text-gradient">
                oliad.D
              </span>
            </motion.a>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>by oliad.D © {new Date().getFullYear()}</span>
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
