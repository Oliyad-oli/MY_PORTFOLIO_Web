import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PiggyBank, 
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from "lucide-react";
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const expenseData = [
  { name: "Housing", value: 1500, color: "#1E3A8A" },
  { name: "Food", value: 600, color: "#34D399" },
  { name: "Transport", value: 400, color: "#FBbf24" },
  { name: "Entertainment", value: 300, color: "#F87171" },
  { name: "Utilities", value: 250, color: "#60A5FA" },
];

const incomeData = [
  { month: "Jan", income: 5200, expenses: 3800 },
  { month: "Feb", income: 5400, expenses: 3600 },
  { month: "Mar", income: 5100, expenses: 4100 },
  { month: "Apr", income: 5800, expenses: 3900 },
  { month: "May", income: 6200, expenses: 4200 },
  { month: "Jun", income: 6500, expenses: 4000 },
];

const savingsData = [
  { month: "Jan", savings: 1400 },
  { month: "Feb", savings: 1800 },
  { month: "Mar", savings: 1000 },
  { month: "Apr", savings: 1900 },
  { month: "May", savings: 2000 },
  { month: "Jun", savings: 2500 },
];

const transactions = [
  { name: "Salary Deposit", amount: 5200, type: "income", date: "Today" },
  { name: "Grocery Store", amount: -156.42, type: "expense", date: "Today" },
  { name: "Netflix Subscription", amount: -15.99, type: "expense", date: "Yesterday" },
  { name: "Freelance Project", amount: 850, type: "income", date: "Dec 3" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-mint/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-l from-navy/20 to-transparent rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-1 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
            Dashboard Preview
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Financial Health at a{" "}
            <span className="text-navy">Glance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Beautiful, intuitive visualizations that make understanding your finances simple and actionable.
          </p>
        </motion.div>

        {/* Dashboard Mock */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-mint/20 via-navy/20 to-gold/20 rounded-3xl blur-xl" />
          
          <div className="relative bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-navy p-6 text-primary-foreground">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-primary-foreground/70 text-sm">Welcome back,</p>
                  <h3 className="font-serif text-xl font-semibold">Sarah Johnson</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-primary-foreground/70">December 2025</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Net Worth", value: "$124,580", change: "+12.5%", trend: "up", icon: DollarSign },
                  { label: "Monthly Income", value: "$6,500", change: "+8.2%", trend: "up", icon: TrendingUp },
                  { label: "Monthly Expenses", value: "$4,000", change: "-3.4%", trend: "down", icon: CreditCard },
                  { label: "Savings Rate", value: "38.5%", change: "+5.1%", trend: "up", icon: PiggyBank },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="w-5 h-5 text-mint" />
                      <span className={`text-xs flex items-center gap-1 ${stat.trend === "up" ? "text-mint" : "text-coral"}`}>
                        {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {stat.change}
                      </span>
                    </div>
                    <p className="font-serif text-xl font-bold">{stat.value}</p>
                    <p className="text-xs text-primary-foreground/70">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Charts Grid */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Income vs Expenses Chart */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 bg-muted/30 rounded-2xl p-5 border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif font-semibold text-foreground">Income vs Expenses</h4>
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={incomeData}>
                      <defs>
                        <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#34D399" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F87171" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#F87171" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '12px',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                        }} 
                      />
                      <Area type="monotone" dataKey="income" stroke="#34D399" strokeWidth={2} fill="url(#incomeGradient)" />
                      <Area type="monotone" dataKey="expenses" stroke="#F87171" strokeWidth={2} fill="url(#expenseGradient)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Expense Breakdown */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-muted/30 rounded-2xl p-5 border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif font-semibold text-foreground">Expense Breakdown</h4>
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="h-48 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {expenseData.slice(0, 3).map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-muted-foreground">{item.name}</span>
                      </div>
                      <span className="font-medium">${item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Savings Trend */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-muted/30 rounded-2xl p-5 border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif font-semibold text-foreground">Savings Trend</h4>
                  <span className="text-xs text-mint font-medium">+42% this year</span>
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={savingsData}>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                      <Tooltip />
                      <Bar dataKey="savings" fill="#34D399" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Recent Transactions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="lg:col-span-2 bg-muted/30 rounded-2xl p-5 border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif font-semibold text-foreground">Recent Transactions</h4>
                  <button className="text-sm text-mint hover:underline">View All</button>
                </div>
                <div className="space-y-3">
                  {transactions.map((tx, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === "income" ? "bg-mint/10" : "bg-coral/10"}`}>
                          {tx.type === "income" ? (
                            <ArrowUpRight className="w-5 h-5 text-mint" />
                          ) : (
                            <ArrowDownRight className="w-5 h-5 text-coral" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{tx.name}</p>
                          <p className="text-xs text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <span className={`font-semibold ${tx.amount > 0 ? "text-mint" : "text-foreground"}`}>
                        {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
