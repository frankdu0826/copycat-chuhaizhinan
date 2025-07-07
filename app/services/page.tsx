export default function ServicesPage() {
  const serviceTypes = [
    {
      name: "拍摄服务",
      icon: "📸",
      description: "产品拍摄和视频制作",
      providers: [
        {
          name: "专业产品摄影工作室",
          description: "10年跨境电商产品拍摄经验，服务过500+品牌，擅长3C、服装、美妆等品类。",
          contactName: "张经理",
          contactWechat: "photostudio2024",
          contactPhone: "13800138000",
          verified: true,
          featured: true,
          portfolio: ["某3C品牌产品拍摄", "某服装品牌视频制作", "某美妆品牌直播素材"]
        }
      ]
    },
    {
      name: "SEO服务",
      icon: "🚀",
      description: "搜索引擎优化服务",
      providers: [
        {
          name: "谷歌SEO专家团队",
          description: "专注独立站SEO优化，平均3个月见效，承诺无效退款。",
          contactName: "李总监",
          contactWechat: "seoexpert2024",
          contactPhone: "13900139000",
          verified: true,
          featured: true,
          portfolio: ["某独立站SEO优化：流量提升300%", "某品牌关键词排名首页", "某电商网站转化率提升50%"]
        }
      ]
    },
    {
      name: "网红营销",
      icon: "🌟",
      description: "KOL/KOC营销服务",
      providers: [
        {
          name: "TikTok网红营销专家",
          description: "覆盖全球TikTok优质达人资源，专业的网红营销策划和执行团队。",
          contactName: "王经理",
          contactWechat: "tiktokmarketing",
          contactPhone: "13700137000",
          verified: true,
          featured: false,
          portfolio: ["某美妆品牌TikTok推广", "某3C产品病毒传播", "某服装品牌达人合作"]
        }
      ]
    },
    {
      name: "代运营",
      icon: "💼",
      description: "店铺代运营服务",
      providers: [
        {
          name: "亚马逊代运营专家",
          description: "专业亚马逊店铺代运营，从选品到运营全程托管，月销售额平均提升200%。",
          contactName: "陈总监",
          contactWechat: "amazonops",
          contactPhone: "13600136000",
          verified: true,
          featured: false,
          portfolio: ["某3C品牌亚马逊运营", "某家居品牌月销百万", "某美妆品牌全球扩张"]
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">出海优选服务方</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          以下推荐的都是熟悉合作过的服务方，专业可靠
        </p>
      </div>

      {/* 服务说明 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
        <div className="flex items-start gap-3">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">服务保障说明</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• 所有推荐服务商均经过实地考察和合作验证</li>
              <li>• 支持先试用后付费，降低合作风险</li>
              <li>• 如遇服务质量问题，平台协助维权</li>
              <li>• 定期回访跟进项目进度和效果</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 服务商列表 */}
      {serviceTypes.map((serviceType, typeIndex) => (
        <section key={typeIndex} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">{serviceType.icon}</span>
            <div>
              <h2 className="text-2xl font-bold">{serviceType.name}</h2>
              <p className="text-gray-600">{serviceType.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceType.providers.map((provider, providerIndex) => (
              <div key={providerIndex} className={`border rounded-lg p-6 ${provider.featured ? 'border-yellow-300 bg-yellow-50' : 'bg-white'} hover:shadow-lg transition-shadow`}>
                {/* 服务商头部 */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{provider.name}</h3>
                      {provider.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          已认证
                        </span>
                      )}
                      {provider.featured && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                          推荐
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{provider.description}</p>
                  </div>
                </div>

                {/* 案例展示 */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">🏆 成功案例</h4>
                  <div className="space-y-2">
                    {provider.portfolio.map((case_item, caseIndex) => (
                      <div key={caseIndex} className="bg-gray-50 rounded-lg p-3 text-sm">
                        <span className="text-green-600">✓</span> {case_item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 联系信息 */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">👤</span>
                    <span>联系人：{provider.contactName}</span>
                  </div>
                  {provider.contactPhone && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">📞</span>
                      <span>{provider.contactPhone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">💬</span>
                    <span>微信：{provider.contactWechat}</span>
                  </div>
                </div>

                {/* 联系按钮 */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    <span>💬</span>
                    添加微信咨询
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    查看详情
                  </button>
                </div>

                {/* 微信二维码提示 */}
                <div className="mt-3 text-xs text-gray-500 text-center">
                  点击添加微信后，请说明来自"跨境指南"
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* 申请入驻 */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">💼 服务商入驻申请</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          如果您是专业的出海服务商，欢迎申请入驻我们的平台，获得更多优质客户资源
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            申请入驻
          </button>
          <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            查看入驻条件
          </button>
        </div>
      </section>

      {/* 服务须知 */}
      <section className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">📋 服务合作须知</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-green-600">✅ 建议做法</h3>
            <ul className="space-y-2 text-sm">
              <li>• 详细了解服务商的专业能力和案例</li>
              <li>• 明确项目需求和预期效果</li>
              <li>• 签订正式的服务合同</li>
              <li>• 设置阶段性的验收节点</li>
              <li>• 保持良好的沟通频率</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-red-600">❌ 注意事项</h3>
            <ul className="space-y-2 text-sm">
              <li>• 避免一次性付清所有费用</li>
              <li>• 不要轻信过于夸大的效果承诺</li>
              <li>• 警惕要求预付大额费用的情况</li>
              <li>• 注意保护自己的商业机密</li>
              <li>• 如遇纠纷及时联系平台客服</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 