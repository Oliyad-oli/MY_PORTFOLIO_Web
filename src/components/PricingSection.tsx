import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for getting started with personal finance",
    price: "Free",
    period: "forever",
    icon: Zap,
    features: [
      "Track up to 3 accounts",
      "Basic expense categorization",
      "Monthly reports",
      "Mobile app access",
      "Email support",
    ],
    cta: "Get Started Free",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Professional",
    description: "For individuals serious about financial growth",
    price: "$9",
    period: "per month",
    icon: Sparkles,
    features: [
      "Unlimited accounts",
      "Advanced categorization & tags",
      "Budget goals & alerts",
      "Investment tracking",
      "Bill reminders",
      "Multi-currency support",
      "Priority support",
      "Export to PDF/CSV",
    ],
    cta: "Start 14-Day Trial",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Business",
    description: "For teams and small businesses",
    price: "$29",
    period: "per month",
    icon: Crown,
    features: [
      "Everything in Professional",
      "Team collaboration (5 users)",
      "Business expense reports",
      "API access",
      "Advanced analytics",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    variant: "navy" as const,
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-mint/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-navy/5 to-transparent" />
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
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Path to{" "}
            <span className="text-gold">Financial Freedom</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free and upgrade as you grow. All plans include our core features with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-mint text-foreground text-sm font-medium shadow-glow">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`h-full p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? "bg-card border-mint/30 shadow-xl shadow-mint/10" 
                  : "bg-card border-border hover:border-mint/20 hover:shadow-lg"
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                    plan.popular ? "bg-mint/10" : "bg-muted"
                  }`}>
                    <plan.icon className={`w-7 h-7 ${plan.popular ? "text-mint" : "text-foreground"}`} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="font-serif text-5xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Free" && (
                      <span className="text-muted-foreground mb-2">/{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-mint/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-mint" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          🔒 30-day money-back guarantee • No credit card required for free plan
        </motion.p>
      </div>
    </section>
  );
}
