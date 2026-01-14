import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Shield, 
  Activity, 
  BarChart, 
  ArrowRight,
  ChevronRight,
  Mail,
  Target,
  Award,
  Database
} from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('BTC')
  const [email, setEmail] = useState('')
  const [cryptoPrices, setCryptoPrices] = useState({
    BTC: { price: 67234.50, change: 3.45, trend: 'up' },
    ETH: { price: 3521.80, change: 5.12, trend: 'up' },
    SOL: { price: 142.35, change: -2.34, trend: 'down' }
  })

  const featuresRef = useRef(null)
  const blockchainsRef = useRef(null)
  const newsletterRef = useRef(null)
  
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const blockchainsInView = useInView(blockchainsRef, { once: true, margin: "-100px" })
  const newsletterInView = useInView(newsletterRef, { once: true, margin: "-100px" })

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoPrices(prev => ({
        BTC: {
          price: prev.BTC.price + (Math.random() - 0.5) * 100,
          change: (Math.random() - 0.5) * 5,
          trend: Math.random() > 0.5 ? 'up' : 'down'
        },
        ETH: {
          price: prev.ETH.price + (Math.random() - 0.5) * 50,
          change: (Math.random() - 0.5) * 5,
          trend: Math.random() > 0.5 ? 'up' : 'down'
        },
        SOL: {
          price: prev.SOL.price + (Math.random() - 0.5) * 5,
          change: (Math.random() - 0.5) * 5,
          trend: Math.random() > 0.5 ? 'up' : 'down'
        }
      }))
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Подписка оформлена для ${email}`)
    setEmail('')
  }

  const blockchains = [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      tps: '15-30',
      fee: '$2-50',
      color: 'from-purple-600 to-indigo-600',
      icon: Database
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      tps: '3000+',
      fee: '$0.001',
      color: 'from-violet-600 to-purple-600',
      icon: Zap
    },
    {
      name: 'Polygon',
      symbol: 'MATIC',
      tps: '7000+',
      fee: '$0.01',
      color: 'from-indigo-600 to-blue-600',
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 glass border-b border-neon-blue/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative">
              <Target className="w-10 h-10 text-neon-blue" />
              <div className="absolute inset-0 bg-neon-blue/30 blur-lg"></div>
            </div>
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              CryptoTrader
            </span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#rates" className="text-gray-300 hover:text-neon-blue transition-colors font-medium">Курсы</a>
            <a href="#blockchains" className="text-gray-300 hover:text-neon-blue transition-colors font-medium">Блокчейны</a>
            <a href="#newsletter" className="text-gray-300 hover:text-neon-blue transition-colors font-medium">Новости</a>
          </div>
          
          <motion.button 
            className="relative px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-white overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Начать торговлю</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </motion.button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-glow">
                Будущее Торговли
              </span>
            </h1>
            <p className="text-3xl md:text-4xl text-neon-blue mb-6 font-bold">
              Профессиональная платформа для трейдеров
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Получайте точные данные в реальном времени, анализируйте тренды и принимайте взвешенные решения с помощью передовых инструментов
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl text-xl font-bold text-white transition-all transform hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Начать сейчас
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="px-10 py-5 glass border-2 border-neon-blue/50 rounded-2xl text-xl font-bold text-white transition-all hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/50">
              Узнать больше
            </button>
          </motion.div>
        </div>
      </section>

      {/* CRYPTO RATES */}
      <section id="rates" className="relative py-20 px-6 z-10">
        <div className="container mx-auto">
          <motion.h2 
            className="text-6xl font-black text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Курсы в <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Реальном Времени</span>
          </motion.h2>

          <div className="max-w-5xl mx-auto glass rounded-3xl border border-neon-blue/30 p-8 shadow-2xl">
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              {Object.keys(cryptoPrices).map(crypto => (
                <button
                  key={crypto}
                  onClick={() => setActiveTab(crypto)}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                    activeTab === crypto
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/50'
                      : 'glass border border-neon-blue/20 text-gray-400 hover:border-neon-blue/50'
                  }`}
                >
                  {crypto}
                </button>
              ))}
            </div>

            {/* Price Display */}
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-7xl font-black text-white mb-4">
                ${cryptoPrices[activeTab].price.toFixed(2)}
              </div>
              <div className={`flex items-center justify-center gap-3 text-3xl font-bold ${
                cryptoPrices[activeTab].trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {cryptoPrices[activeTab].trend === 'up' ? (
                  <TrendingUp className="w-8 h-8" />
                ) : (
                  <TrendingDown className="w-8 h-8" />
                )}
                {Math.abs(cryptoPrices[activeTab].change).toFixed(2)}%
              </div>
              
              {/* Animated Chart Placeholder */}
              <div className="mt-12 h-64 relative">
                <svg className="w-full h-full" viewBox="0 0 800 200">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 0.5 }} />
                      <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 0 150 Q 100 120, 200 100 T 400 80 T 600 60 T 800 40"
                    fill="none"
                    stroke="#00d4ff"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 0 150 Q 100 120, 200 100 T 400 80 T 600 60 T 800 40 L 800 200 L 0 200 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </svg>
              </div>
            </motion.div>

            <div className="text-center text-sm text-gray-500 mt-4">
              Обновляется каждые 10 секунд
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section ref={featuresRef} className="relative py-20 px-6 z-10">
        <div className="container mx-auto">
          <motion.h2 
            className="text-6xl font-black text-center mb-16"
            initial={{ opacity: 0 }}
            animate={featuresInView ? { opacity: 1 } : {}}
          >
            Почему <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Мы?</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: 'Точные Данные',
                description: 'Интеграция с ведущими биржами для получения данных в реальном времени с точностью до миллисекунды'
              },
              {
                icon: Shield,
                title: 'Безопасность',
                description: 'Многоуровневая защита активов с использованием холодного хранения и 2FA аутентификации'
              },
              {
                icon: BarChart,
                title: 'Аналитика',
                description: 'Профессиональные инструменты технического анализа и индикаторы для принятия решений'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="group glass rounded-2xl p-8 border border-neon-blue/20 hover:border-neon-blue/50 transition-all hover:shadow-2xl hover:shadow-neon-blue/20"
              >
                <div className="relative mb-6 inline-block">
                  <feature.icon className="w-16 h-16 text-neon-blue" />
                  <div className="absolute inset-0 bg-neon-blue/30 blur-xl group-hover:blur-2xl transition-all"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCKCHAINS */}
      <section id="blockchains" ref={blockchainsRef} className="relative py-20 px-6 z-10">
        <div className="container mx-auto">
          <motion.h2 
            className="text-6xl font-black text-center mb-16"
            initial={{ opacity: 0 }}
            animate={blockchainsInView ? { opacity: 1 } : {}}
          >
            Популярные <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Блокчейны</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blockchains.map((blockchain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={blockchainsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative glass rounded-3xl p-8 border border-neon-blue/20 hover:border-neon-purple/50 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${blockchain.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <blockchain.icon className="w-12 h-12 text-neon-blue" />
                    <span className="text-2xl font-black text-gray-500">{blockchain.symbol}</span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-6">{blockchain.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">TPS:</span>
                      <span className="text-neon-blue font-bold text-xl">{blockchain.tps}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Комиссия:</span>
                      <span className="text-neon-purple font-bold text-xl">{blockchain.fee}</span>
                    </div>
                  </div>

                  <button className="mt-6 w-full py-3 glass border border-neon-blue/30 rounded-xl font-bold text-white hover:bg-neon-blue/10 transition-all flex items-center justify-center gap-2 group">
                    Подробнее
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" ref={newsletterRef} className="relative py-20 px-6 z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={newsletterInView ? { opacity: 1, y: 0 } : {}}
            className="glass rounded-3xl border border-neon-blue/30 p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5"></div>
            
            <div className="relative z-10">
              <Mail className="w-20 h-20 text-neon-blue mx-auto mb-6" />
              <h2 className="text-5xl font-black text-white mb-6">
                Подпишитесь на <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Новости</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Получайте эксклюзивные аналитические отчеты, прогнозы и торговые сигналы от профессионалов
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  required
                  className="flex-1 px-6 py-4 glass border border-neon-blue/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-all text-lg"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-white text-lg shadow-lg shadow-neon-blue/50 hover:shadow-neon-purple/50 transition-all"
                >
                  Подписаться
                </motion.button>
              </form>

              <p className="text-sm text-gray-500 mt-6">
                Без спама. Только качественная информация для трейдеров.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl border border-neon-blue/30 p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10"></div>
            
            <div className="relative z-10">
              <Award className="w-24 h-24 text-neon-blue mx-auto mb-8" />
              <h2 className="text-6xl font-black text-white mb-6">
                Готовы начать торговлю?
              </h2>
              <p className="text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
                Присоединяйтесь к тысячам успешных трейдеров. Первая неделя бесплатно!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl text-2xl font-black text-white shadow-2xl shadow-neon-blue/50 hover:shadow-neon-purple/50 transition-all"
              >
                Начать сейчас
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-black/50 border-t border-neon-blue/20 py-12 px-6 z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <Target className="w-8 h-8 text-neon-blue" />
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                CryptoTrader
              </span>
            </div>
            
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-neon-blue transition-colors">О нас</a>
              <a href="#" className="hover:text-neon-blue transition-colors">Условия</a>
              <a href="#" className="hover:text-neon-blue transition-colors">Конфиденциальность</a>
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-sm mt-8">
            © 2024 CryptoTrader Pro. Все права защищены. Торговля криптовалютой сопряжена с рисками.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App