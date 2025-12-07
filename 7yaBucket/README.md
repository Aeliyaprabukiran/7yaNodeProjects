# 7yaBucket 💰
## A Multi-Utility Website for Financial Insights & Daily Calculators

**7yaBucket** is your all-in-one digital companion for staying informed about finances, performing quick calculations, and managing daily expenses—all in one simple, reliable platform.

---

## 🌟 Core Features

### 1. **Financial Dashboard** 📊
- **Real-time Commodity Rates**
  - Live Gold Rate (₹/gram)
  - Live Silver Rate (₹/gram)
  - Interactive charts showing price trends
  - Historical data visualization

- **Currency Exchange Tracker**
  - INR to USD conversion
  - Expandable to other currency pairs
  - Live exchange rates updated every 5 minutes

- **Quick Insights**
  - Comparison tables
  - Price alerts for significant changes
  - Export data option

### 2. **Utility Dashboard** 🧮
Centralized dropdown menu with multiple calculators:
- **BMI Calculator** → Track health metrics
- **Standard Calculator** → Quick arithmetic operations
- **Loan & Interest Calculator** → EMI calculations, repayment schedules
- **Expandable** → Easy to add more tools later

### 3. **Daily Expense & Budget Tracker** 💳
- **Simple Expense Logging**
  - Add daily expenses (food, travel, bills, entertainment, utilities, etc.)
  - Categorize spending automatically
  - Quick add with minimal clicks

- **Monthly Summary**
  - Visual breakdown of spending categories
  - Monthly spending comparison
  - Budget vs. actual tracking

- **Budget Planning**
  - Set monthly budget limits
  - Track spending progress
  - Receive alerts when approaching limits

- **Data Export**
  - Export as CSV/PDF
  - Chart visualizations
  - Shareable reports

---

## 📁 Project Structure

```
7yaBucket/
├── frontend/                    # React/Vue frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FinancialDashboard.jsx
│   │   │   ├── UtilityDashboard.jsx
│   │   │   ├── ExpenseTracker.jsx
│   │   │   ├── BMICalculator.jsx
│   │   │   ├── Calculator.jsx
│   │   │   ├── LoanCalculator.jsx
│   │   │   └── Charts.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── styles/
│   │   │   └── App.css
│   │   └── App.jsx
│   ├── package.json
│   └── README.md
│
├── backend/                     # Node.js/Express API server
│   ├── routes/
│   │   ├── commodities.js       # Gold/Silver rates API
│   │   ├── currency.js          # Currency exchange API
│   │   └── expenses.js          # Expense tracker API
│   ├── controllers/
│   ├── models/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── README.md
│
├── database/                    # Database setup
│   ├── schema.sql
│   └── seedData.js
│
├── .env.example
├── docker-compose.yml           # Optional: Docker setup
└── README.md                    # Main documentation
```

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|----------|
| **Frontend** | React/Vue.js, Tailwind CSS | Responsive UI, interactive dashboards |
| **Backend** | Node.js, Express.js | API server, business logic |
| **Database** | MongoDB/SQLite/Firebase | Lightweight storage for expenses |
| **Data Sources** | APIs (Rapid API, Firebase) | Live commodity & currency rates |
| **Charts** | Chart.js / D3.js | Data visualization |
| **Deployment** | Vercel/Netlify (Frontend), Heroku/Railway (Backend) | Scalable hosting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB/SQLite (for backend)

### Installation

#### Clone the repository
```bash
git clone https://github.com/Aeliyaprabukiran/7yaNodeProjects.git
cd 7yaNodeProjects/7yaBucket
```

#### Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm start
```

#### Setup Backend
```bash
cd ../backend
npm install
cp .env.example .env
node server.js
```

#### Environment Variables (`.env`)
```
# Frontend
REACT_APP_API_URL=http://localhost:5000

# Backend
PORT=5000
DB_URI=mongodb://localhost:27017/7yabucket
RAPID_API_KEY=your_api_key_here
CURRENCY_API_KEY=your_api_key_here
NODE_ENV=development
```

---

## 📊 API Endpoints

### Financial Dashboard
- `GET /api/commodities/gold` → Current gold rate
- `GET /api/commodities/silver` → Current silver rate
- `GET /api/commodities/history?commodity=gold&days=30` → Price history

### Currency Exchange
- `GET /api/currency/inr-to-usd` → Current exchange rate
- `GET /api/currency/history?pair=INRUSD` → Exchange history

### Expense Tracker
- `POST /api/expenses` → Add new expense
- `GET /api/expenses?month=2025-01` → Get monthly expenses
- `GET /api/expenses/summary` → Monthly summary
- `PUT /api/expenses/:id` → Update expense
- `DELETE /api/expenses/:id` → Delete expense

---

## 🎯 Development Roadmap

### Phase 1: MVP (Completed)
- [x] Financial Dashboard with static data
- [x] Basic calculators (BMI, Standard)
- [x] Expense tracker UI

### Phase 2: Live Data & Backend
- [ ] Integrate commodity APIs (Gold/Silver rates)
- [ ] Integrate currency exchange APIs
- [ ] Connect expense tracker to database
- [ ] User authentication (optional)

### Phase 3: Advanced Features
- [ ] Budget alerts & notifications
- [ ] Multi-currency support
- [ ] Advanced analytics & insights
- [ ] Mobile app (React Native)
- [ ] Recurring expense automation

### Phase 4: Optimization
- [ ] Caching for faster load times
- [ ] PWA support
- [ ] Dark mode
- [ ] Multi-language support

---

## 🔐 Security & Best Practices

- **Input Validation** → All forms validated on client & server
- **Rate Limiting** → API endpoints protected from abuse
- **Environment Variables** → Sensitive keys stored securely
- **CORS Policy** → Cross-origin requests properly configured
- **Error Handling** → User-friendly error messages
- **Data Privacy** → Expenses stored locally or in secure database

---

## 📱 User Experience

✨ **Design Principles**
- **Minimal clicks** → 2-3 clicks to complete any action
- **Mobile-first** → Fully responsive on all devices
- **Fast load times** → Optimized assets, lazy loading
- **Intuitive navigation** → Clear labels, logical flow
- **Visual feedback** → Loading spinners, success messages, error alerts

---

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

---

## 📧 Support & Contact

- **GitHub Issues** → Report bugs or request features
- **Email** → aeliyaprabukiran@example.com
- **Twitter** → @Aeliyaprabukiran

---

## 🎉 Vision

7yaBucket aims to become a trusted digital companion for everyday people balancing financial awareness, health tracking, and smart budgeting—all without overwhelming complexity.

**Your daily financial buddy is just a click away!** 💸
