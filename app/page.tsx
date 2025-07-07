export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-16">
        <h1 className="text-5xl font-bold mb-6">
          出海就上跨境指南
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          最懂出海人的工具导航栏，为跨境电商提供一站式资源和知识
        </p>
        <div className="flex justify-center gap-4">
          <a href="/tools" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            浏览工具
          </a>
          <a href="/articles" className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            学习教程
          </a>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">500+</div>
          <div className="text-gray-600">精选工具</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">1000+</div>
          <div className="text-gray-600">原创文章</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600">200+</div>
          <div className="text-gray-600">优质服务商</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-600">50000+</div>
          <div className="text-gray-600">出海人在使用</div>
        </div>
      </section>

      {/* 热门工具 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">热门工具推荐</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Helium 10",
              description: "亚马逊卖家必备的一站式运营工具",
              category: "选品工具",
              discount: "50% OFF"
            },
            {
              name: "Jungle Scout",
              description: "专业的亚马逊产品研究工具",
              category: "选品工具", 
              discount: "20% OFF"
            },
            {
              name: "Canva",
              description: "简单易用的在线设计工具",
              category: "设计工具",
              discount: "免费试用"
            }
          ].map((tool, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{tool.name}</h3>
                  <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {tool.category}
                  </span>
                </div>
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                  {tool.discount}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  了解详情
                </button>
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors">
                  访问官网
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 最新文章 */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">最新干货分享</h2>
          <a href="/articles" className="text-blue-600 hover:underline">
            查看全部 →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "2024年亚马逊Prime Day完整攻略",
              excerpt: "深度解析2024年亚马逊Prime Day的最新政策、报名流程、营销策略...",
              category: "亚马逊运营",
              date: "2024-01-15"
            },
            {
              title: "Shopify建站从0到1完整指南",
              excerpt: "手把手教您搭建Shopify独立站，从选品到引流，打造属于自己的电商帝国...",
              category: "独立站运营",
              date: "2024-01-10"
            },
            {
              title: "TikTok Shop美国市场爆单秘籍",
              excerpt: "揭秘TikTok Shop美国市场的运营技巧，包括选品策略、直播技巧...",
              category: "TikTok运营",
              date: "2024-01-08"
            }
          ].map((article, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 cursor-pointer">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                阅读全文 →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 服务商推荐 */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-4">出海优选服务方</h2>
        <p className="text-center text-gray-600 mb-8">
          以下推荐的都是熟悉合作过的服务方
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "专业产品摄影工作室",
              service: "拍摄服务",
              description: "10年跨境电商产品拍摄经验，服务过500+品牌",
              contact: "张经理"
            },
            {
              name: "谷歌SEO专家团队", 
              service: "SEO服务",
              description: "专注独立站SEO优化，平均3个月见效",
              contact: "李总监"
            },
            {
              name: "TikTok网红营销",
              service: "网红营销", 
              description: "覆盖全球TikTok优质达人资源",
              contact: "王经理"
            }
          ].map((provider, index) => (
            <div key={index} className="bg-white border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📸</span>
                <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
                  {provider.service}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{provider.name}</h3>
              <p className="text-gray-600 mb-4">{provider.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">联系人：{provider.contact}</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  添加微信
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 