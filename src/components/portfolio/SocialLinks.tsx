import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail, MessageCircle, Coffee } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "hover:text-foreground hover:border-foreground",
    bgHover: "hover:bg-foreground/10",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:text-[#0077B5] hover:border-[#0077B5]",
    bgHover: "hover:bg-[#0077B5]/10",
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    href: "https://twitter.com",
    color: "hover:text-foreground hover:border-foreground",
    bgHover: "hover:bg-foreground/10",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    color: "hover:text-[#E4405F] hover:border-[#E4405F]",
    bgHover: "hover:bg-[#E4405F]/10",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com",
    color: "hover:text-[#FF0000] hover:border-[#FF0000]",
    bgHover: "hover:bg-[#FF0000]/10",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.com",
    color: "hover:text-[#5865F2] hover:border-[#5865F2]",
    bgHover: "hover:bg-[#5865F2]/10",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@alexchen.dev",
    color: "hover:text-primary hover:border-primary",
    bgHover: "hover:bg-primary/10",
  },
  {
    name: "Buy Me Coffee",
    icon: Coffee,
    href: "https://buymeacoffee.com",
    color: "hover:text-[#FFDD00] hover:border-[#FFDD00]",
    bgHover: "hover:bg-[#FFDD00]/10",
  },
];

export function SocialLinks() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h3>
            <p className="text-muted-foreground">
              Find me across the web and let's build something amazing together
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-3 px-5 py-3 rounded-full
                  glass border border-border/50 
                  text-muted-foreground transition-all duration-300
                  ${social.color} ${social.bgHover}
                `}
              >
                <social.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}