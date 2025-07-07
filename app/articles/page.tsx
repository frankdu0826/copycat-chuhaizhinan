export default function ArticlesPage() {
  const categories = [
    "全部文章", "亚马逊运营", "独立站运营", "TikTok运营", 
    "Google SEO", "网红营销", "选品技巧", "广告投放"
  ]

  const articles = [
    {
      id: 1,
      title: "2024年亚马逊Prime Day完整攻略：卖家必读指南",
      excerpt: "深度解析2024年亚马逊Prime Day的最新政策、报名流程、营销策略，助您在这场年度大促中脱颖而出。",
      category: "亚马逊运营",
      author: "出海小助手",
      publishDate: "2024-01-15",
      readTime: "8分钟",
      views: 1250,
      featured: true,
      coverImage: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Shopify建站从0到1：30天打造月销10万美金独立站",
      excerpt: "手把手教您搭建Shopify独立站，从选品到引流，从0开始打造属于自己的电商帝国。",
      category: "独立站运营",
      author: "独立站专家",
      publishDate: "2024-01-12",
      readTime: "12分钟",
      views: 980,
      featured: true,
      coverImage: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "TikTok Shop美国市场爆单秘籍：90天GMV破百万",
      excerpt: "揭秘TikTok Shop美国市场的运营技巧，包括选品策略、直播技巧、达人合作等核心要素。",
      category: "TikTok运营",
      author: "TikTok操盘手",
      publishDate: "2024-01-10",
      readTime: "10分钟",
      views: 1580,
      featured: false,
      coverImage: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Google SEO实战指南：如何让你的独立站排名首页",
      excerpt: "从关键词研究到技术优化，全面解析Google SEO的实战技巧，助你的网站快速获得自然流量。",
      category: "Google SEO",
      author: "SEO专家",
      publishDate: "2024-01-08",
      readTime: "15分钟",
      views: 820,
      featured: false,
      coverImage: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "网红营销ROI最大化：如何选择合适的KOL合作",
      excerpt: "详解网红营销的选择标准、合作模式、效果评估等关键环节，提升营销投资回报率。",
      category: "网红营销",
      author: "营销顾问",
      publishDate: "2024-01-05",
      readTime: "6分钟",
      views: 650,
      featured: false,
      coverImage: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "亚马逊选品黄金法则：如何找到月销万件的爆款产品",
      excerpt: "分享亚马逊选品的核心方法论，从市场分析到竞品研究，教你识别有潜力的产品。",
      category: "选品技巧",
      author: "选品达人",
      publishDate: "2024-01-03",
      readTime: "9分钟",
      views: 1120,
      featured: false,
      coverImage: "/api/placeholder/400/250"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">出海干货文章</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          分享最实用的跨境电商运营经验和实战技巧
        </p>
      </div>

      {/* 分类导航 */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full transition-colors ${
              index === 0
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 精选文章 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🔥 编辑精选</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  📸 封面图片
                </div>
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  精选
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.publishDate}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>作者：{article.author}</span>
                  <div className="flex items-center gap-4">
                    <span>👁 {article.views}</span>
                    <span>⏱ {article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 最新文章 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">📰 最新文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.filter(article => !article.featured).map((article) => (
            <div key={article.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.publishDate}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 hover:text-blue-600 cursor-pointer">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>作者：{article.author}</span>
                <div className="flex items-center gap-3">
                  <span>👁 {article.views}</span>
                  <span>⏱ {article.readTime}</span>
                </div>
              </div>
              <div className="mt-4">
                <button className="text-blue-600 hover:underline">
                  阅读全文 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 分页 */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            上一页
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
          <span className="px-3 py-2 text-gray-500">...</span>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">10</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            下一页
          </button>
        </div>
      </div>

      {/* 订阅通知 */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">📬 订阅最新干货</h2>
        <p className="mb-6">第一时间获取最新的出海运营文章和工具推荐</p>
        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="输入您的邮箱"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900"
          />
          <button className="bg-yellow-500 text-yellow-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            订阅
          </button>
        </div>
      </section>
    </div>
  )
} 