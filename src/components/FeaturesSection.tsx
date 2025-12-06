import { motion } from "framer-motion";
import { 
  Wallet, 
  PieChart, 
  Target, 
  CreditCard, 
  TrendingUp, 
  FileText, 
  Bell, 
  Globe, 
  Download, 
  Shield, 
  Smartphone,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Interactive Dashboard",
    description: "Real-time metrics with beautiful charts showing net worth, income vs expenses, and savings progress.",
    color: "mint",
  },
  {
    icon: Wallet,
    title: "Income & Expense Tracking",
    description: "Manual entry and automated imports with smart categorization and recurring transaction support.",
    color: "navy",
  },
  {
    icon: Target,
    title: "Budget Management",
    description: "Create budgets with customizable limits, real-time alerts, and support for the 50/30/20 rule.",
    color: "gold",
  },
  {
    icon: TrendingUp,
    title: "Savings Goals",
    description: "Set financial goals and track progress with visual indicators and milestone celebrations.",
    color: "mint",
  },
  {
    icon: CreditCard,
    title: "Debt Management",
    description: "Track loans and credit cards with smart repayment strategies like snowball or avalanche.",
    color: "coral",
  },
  {
    icon: BarChart3,
    title: "Investment Tracking",
    description: "Monitor stocks, bonds, and crypto with performance metrics and diversification insights.",
    color: "navy",
  },
  {
    icon: FileText,
    title: "Reports & Analytics",
    description: "Generate customizable reports with charts and export to PDF or CSV formats.",
    color: "gold",
  },
  {
    icon: Bell,
    title: "Bill Reminders",
    description: "Never miss a payment with smart reminders via email or in-app notifications.",
    color: "coral",
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    description: "Handle transactions in multiple currencies with real-time exchange rates.",
    color: "mint",
  },
  {
    icon: Download,
    title: "Data Import/Export",
    description: "Import from CSV or bank APIs and export for tax preparation or backups.",
    color: "navy",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "End-to-end encryption, secure sessions, and HTTPS enforcement for your data.",
    color: "gold",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first design optimized for seamless use on all devices.",
    color: "mint",
  },
];

const colorClasses = {
  mint: {
    bg: "bg-mint/10",
    text: "text-mint",
    border: "border-mint/20",
    hover: "group-hover:bg-mint/20",
  },
  navy: {
    bg: "bg-navy/10",
    text: "text-navy",
    border: "border-navy/20",
    hover: "group-hover:bg-navy/20",
  },
  gold: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "border-gold/20",
    hover: "group-hover:bg-gold/20",
  },
  coral: {
    bg: "bg-coral/10",
    text: "text-coral",
    border: "border-coral/20",
    hover: "group-hover:bg-coral/20",
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-mint">Manage Your Finances</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of tools designed to give you complete control 
            over your financial life with precision and ease.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`h-full p-6 rounded-2xl bg-card border ${colors.border} card-hover transition-all duration-300`}>
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-4 transition-colors duration-300`}>
                    <feature.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
