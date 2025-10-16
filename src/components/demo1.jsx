import React, { useState } from 'react';
import { Menu, X, Package, ShoppingCart, CreditCard, User, TrendingUp, AlertTriangle, CheckCircle, Clock, ArrowUp, ArrowDown, DollarSign, Home } from 'lucide-react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [authMode, setAuthMode] = useState('login');

  // Sample data
  const stats = [
    { title: 'Total Products', value: '156', change: '+12%', period: 'from last month', icon: Package, trend: 'up' },
    { title: 'Active Orders', value: '28', change: '+5', period: 'new orders today', icon: ShoppingCart, trend: 'up' },
    { title: 'Monthly Revenue', value: 'ZMW 45,230', change: '+18%', period: 'from last month', icon: DollarSign, trend: 'up' },
    { title: 'Growth Rate', value: '23%', change: '+3%', period: 'this quarter', icon: TrendingUp, trend: 'up' },
  ];

  const recentOrders = [
    { id: 'AGR1001', farmer: 'John Mwansa', amount: 'ZMW 2034.77', status: 'Pending' },
    { id: 'AGR1002', farmer: 'John Mwansa', amount: 'ZMW 1479.40', status: 'Pending' },
    { id: 'AGR1003', farmer: 'John Mwansa', amount: 'ZMW 2090.66', status: 'Pending' },
  ];

  const lowStockItems = [
    { name: 'Fertilizer NPK 20-10-10', sku: 'AGR200', units: 10 },
    { name: 'Hybrid Maize Seeds', sku: 'AGR201', units: 10 },
    { name: 'Pesticide Spray', sku: 'AGR202', units: 6 },
  ];

  const products = [
    { name: 'NPK Fertilizer 20-10-10', sku: 'AGR001', category: 'Fertilizers', price: 450.00, stock: 120, status: 'In Stock' },
    { name: 'Hybrid Maize Seeds (10kg)', sku: 'AGR002', category: 'Seeds', price: 850.00, stock: 45, status: 'In Stock' },
    { name: 'Organic Pesticide Spray', sku: 'AGR003', category: 'Pesticides', price: 320.00, stock: 8, status: 'Low Stock' },
    { name: 'Drip Irrigation Kit', sku: 'AGR004', category: 'Equipment', price: 1200.00, stock: 25, status: 'In Stock' },
  ];

  const orders = [
    { id: 'AGR1001', farmer: 'John Mwansa', date: '2025-10-05', items: 3, total: 'ZMW 1,620.00', status: 'Pending' },
    { id: 'AGR1002', farmer: 'Mary Banda', date: '2025-10-05', items: 2, total: 'ZMW 1,300.00', status: 'Processing' },
    { id: 'AGR1003', farmer: 'Peter Lungu', date: '2025-10-04', items: 5, total: 'ZMW 2,840.00', status: 'Completed' },
    { id: 'AGR1004', farmer: 'Grace Phiri', date: '2025-10-04', items: 1, total: 'ZMW 450.00', status: 'Pending' },
    { id: 'AGR1005', farmer: 'David Tembo', date: '2025-10-03', items: 4, total: 'ZMW 3,120.00', status: 'Completed' },
  ];

  const transactions = [
    { id: 'TXN001', orderId: 'AGR1003', date: '2025-10-04', amount: 'ZMW 2,840.00', method: 'Mobile Money', status: 'Completed' },
    { id: 'TXN002', orderId: 'AGR1005', date: '2025-10-03', amount: 'ZMW 3,120.00', method: 'Bank Transfer', status: 'Completed' },
    { id: 'TXN003', orderId: 'AGR1002', date: '2025-10-05', amount: 'ZMW 1,300.00', method: 'Mobile Money', status: 'Pending' },
    { id: 'TXN004', orderId: 'AGR1001', date: '2025-10-05', amount: 'ZMW 1,620.00', method: 'Bank Transfer', status: 'Pending' },
  ];

  const LandingPage = () => (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-green-800">Agro-Hub Zambia</div>
              <div className="text-xs text-gray-600">Supplier Portal</div>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage('auth')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Get Started
          </button>
        </div>
      </nav>

      <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Empowering Zambian Agriculture
            </h1>
            <p className="text-xl text-green-50 mb-8 max-w-3xl mx-auto">
              Join Zambia's trusted digital agricultural ecosystem. Connect with farmers, 
              manage inventory, and grow your business with government-backed transparency.
            </p>
            <button
              onClick={() => setCurrentPage('auth')}
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg"
            >
              Join as Supplier
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Government Verified</h3>
              <p className="text-gray-600 leading-relaxed">
                Official government-backed platform ensuring trust and transparency in all transactions
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Direct Market Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect directly with farmers and FRA, eliminating middlemen and maximizing profits
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Grow Your Business</h3>
              <p className="text-gray-600 leading-relaxed">
                Access analytics, manage inventory, and scale your agricultural supply business
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Agriculture?</h2>
          <p className="text-xl text-green-50 mb-8">
            Join verified suppliers serving Zambia's farming community
          </p>
          <button
            onClick={() => setCurrentPage('auth')}
            className="bg-white text-green-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg"
          >
            Sign Up Now
          </button>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2025 Agro-Hub Zambia. Government-backed digital agricultural ecosystem.
          </p>
        </div>
      </footer>
    </div>
  );

  const AuthPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
            <Package className="w-8 h-8 text-white" />
          </div>
          <span className="text-3xl font-bold text-green-800">Agro-Hub</span>
        </div>

        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setAuthMode('login')}
            className={`flex-1 py-2 rounded-md font-semibold transition ${
              authMode === 'login' ? 'bg-white shadow-sm text-green-600' : 'text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setAuthMode('signup')}
            className={`flex-1 py-2 rounded-md font-semibold transition ${
              authMode === 'signup' ? 'bg-white shadow-sm text-green-600' : 'text-gray-600'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setCurrentPage('dashboard'); }}>
          {authMode === 'signup' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your business name"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            {authMode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className={`bg-white h-screen fixed left-0 top-0 shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden z-20`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-green-800">Agro-Hub</div>
              <div className="text-xs text-gray-500">Supplier Portal</div>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              currentPage === 'dashboard' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => setCurrentPage('products')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              currentPage === 'products' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Package className="w-5 h-5" />
            <span className="font-medium">Products</span>
          </button>
          <button
            onClick={() => setCurrentPage('orders')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              currentPage === 'orders' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium">Orders</span>
          </button>
          <button
            onClick={() => setCurrentPage('transactions')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              currentPage === 'transactions' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <CreditCard className="w-5 h-5" />
            <span className="font-medium">Transactions</span>
          </button>
          <button
            onClick={() => setCurrentPage('profile')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              currentPage === 'profile' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Profile</span>
          </button>
        </nav>
      </div>
    </div>
  );

  const DashboardPage = () => (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your supplier account</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                stat.trend === 'up' ? 'bg-green-50' : 'bg-red-50'
              }`}>
                <stat.icon className={`w-6 h-6 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                <span className="font-semibold">{stat.change}</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.title}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.period}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {recentOrders.map((order, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">{order.id}</div>
                  <div className="text-sm text-gray-600">Farmer: {order.farmer}</div>
                  <div className="text-sm font-semibold text-green-600 mt-1">{order.amount}</div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl font-bold text-gray-900">Low Stock Alert</h2>
          </div>
          <div className="space-y-4">
            {lowStockItems.map((item, idx) => (
              <div key={idx} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="font-semibold text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-600 mt-1">SKU: {item.sku}</div>
                <div className="text-sm font-semibold text-orange-600 mt-2">{item.units} units left</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProductsPage = () => (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Product Marketplace</h1>
          <p className="text-gray-600 mt-1">Manage products available to farmers across Zambia</p>
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Add Product
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
          <div className="text-sm text-gray-600">Total Products</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-3xl font-bold text-green-600 mb-1">3</div>
          <div className="text-sm text-gray-600">In Stock</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-3xl font-bold text-orange-600 mb-1">1</div>
          <div className="text-sm text-gray-600">Low Stock</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">SKU</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="px-2 py-1 bg-gray-100 rounded text-sm">{product.sku}</code>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">ZMW {product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const OrdersPage = () => (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-600 mt-1">Manage and track farmer orders</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Farmer</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Items</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.farmer}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-600">{order.items}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const TransactionsPage = () => (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="text-gray-600 mt-1">View payment history and pending transactions</p>
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Export
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-sm text-gray-600 mb-2">Total Earnings</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">ZMW 45,230.00</div>
          <div className="text-xs text-gray-500">This month</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-sm text-gray-600 mb-2">Pending Payments</div>
          <div className="text-3xl font-bold text-orange-600 mb-1">ZMW 2,920.00</div>
          <div className="text-xs text-gray-500">2 transactions</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-sm text-gray-600 mb-2">Completed Payments</div>
          <div className="text-3xl font-bold text-green-600 mb-1">ZMW 42,310.00</div>
          <div className="text-xs text-gray-500">This month</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Transaction ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((txn, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{txn.id}</td>
                  <td className="px-6 py-4 text-gray-600">{txn.orderId}</td>
                  <td className="px-6 py-4 text-gray-600">{txn.date}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{txn.amount}</td>
                  <td className="px-6 py-4 text-gray-600">{txn.method}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      txn.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Supplier Profile</h1>
        <p className="text-gray-600 mt-1">Manage your business information and settings</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Business Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  defaultValue="AgriSupply Zambia Ltd"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  defaultValue="REG-2024-001234"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  defaultValue="contact@agrisupply.zm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  defaultValue="+260 97 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows="3"
                  defaultValue="Plot 123, Great East Road, Lusaka, Zambia"
                />
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  defaultValue="Zambia National Commercial Bank"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  defaultValue="****1234"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Money Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  defaultValue="+260 97 123 4567"
                />
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Update Payment Details
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Verification Status</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Government Approval</div>
                  <div className="text-sm text-gray-600">Verified</div>
                </div>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">FRA Registration</div>
                  <div className="text-sm text-gray-600">Verified</div>
                </div>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Quality Certification</div>
                  <div className="text-sm text-gray-600">Verified</div>
                </div>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MainLayout = () => (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">AgriSupply Zambia</div>
                <div className="text-xs text-gray-600">Supplier Account</div>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                AS
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {currentPage === 'dashboard' && <DashboardPage />}
          {currentPage === 'products' && <ProductsPage />}
          {currentPage === 'orders' && <OrdersPage />}
          {currentPage === 'transactions' && <TransactionsPage />}
          {currentPage === 'profile' && <ProfilePage />}
        </main>
      </div>
    </div>
  );

  if (!isLoggedIn) {
    if (currentPage === 'auth') {
      return <AuthPage />;
    }
    return <LandingPage />;
  }

  return <MainLayout />;
};

export default App;