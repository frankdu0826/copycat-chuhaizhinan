export default function ToolsPage() {
  const toolCategories = [
    {
      name: "选品工具",
      icon: "🔍",
      description: "产品研究和选品分析工具",
      tools: [
        {
          name: "Helium 10",
          description: "亚马逊卖家必备的一站式运营工具",
          website: "https://www.helium10.com",
          discount: "50% OFF",
          discountCode: "CHUHAI50",
          verified: true,
          featured: true
        },
        {
          name: "Jungle Scout",
          description: "专业的亚马逊产品研究工具",
          website: "https://www.junglescout.com",
          discount: "20% OFF",
          discountCode: "CHUHAI20",
          verified: true,
          featured: true
        }
      ]
    },
    {
      name: "SEO工具",
      icon: "📊",
      description: "搜索引擎优化工具",
      tools: [
        {
          name: "Ahrefs",
          description: "专业的SEO分析和关键词研究工具",
          website: "https://ahrefs.com",
          discount: "免费试用",
          verified: true
        },
        {
          name: "SEMrush",
          description: "全方位数字营销工具套件",
          website: "https://semrush.com",
          discount: "7天免费",
          verified: true
        }
      ]
    },
    {
      name: "设计工具",
      icon: "🎨",
      description: "图片和视频设计工具",
      tools: [
        {
          name: "Canva",
          description: "简单易用的在线设计工具",
          website: "https://www.canva.com",
          discount: "免费使用",
          verified: true
        },
        {
          name: "Figma",
          description: "专业的UI/UX设计协作平台",
          website: "https://www.figma.com",
          discount: "免费版本",
          verified: true
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">工具导航大全</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          精选500+跨境电商必备工具，助力您的出海之路
        </p>
      </div>

      {/* 搜索栏 */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索工具..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500">
            🔍
          </button>
        </div>
      </div>

      {/* 工具分类 */}
      {toolCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.tools.map((tool, toolIndex) => (
              <div key={toolIndex} className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                {/* 工具头部 */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{tool.name}</h3>
                      {tool.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          已验证
                        </span>
                      )}
                      {tool.featured && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                          精选
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                </div>

                {/* 优惠信息 */}
                {tool.discount && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-green-800 font-semibold">🎉 {tool.discount}</span>
                      {tool.discountCode && (
                        <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          {tool.discountCode}
                        </code>
                      )}
                    </div>
                  </div>
                )}

                {/* 按钮组 */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    了解详情
                  </button>
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors text-center"
                  >
                    访问官网 ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* 提交工具 */}
      <section className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">没有找到您需要的工具？</h2>
        <p className="text-gray-600 mb-6">
          告诉我们您需要什么工具，我们会尽快添加到导航中
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          提交工具推荐
        </button>
      </section>
    </div>
  )
} 