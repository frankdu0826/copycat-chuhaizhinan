# 🚀 跨境指南 - 跨境电商工具导航平台

> 最懂出海人的工具导航栏，为跨境电商提供一站式资源和知识分享平台

## 📋 项目简介

跨境指南是一个专为跨境电商出海企业打造的知识分享平台，提供：

- 🛠️ **工具导航** - 精选跨境电商必备工具，包含优惠码和联盟链接
- 📚 **干货文章** - 亚马逊、独立站、TikTok等平台运营教程
- 🤝 **服务商推荐** - 出海优质服务方资源对接
- 📊 **数据分析** - 用户行为统计和转化追踪

## 🎯 快速开始（GitHub Codespaces）

### 🌟 一键启动开发环境（推荐）

1. **点击右上角 Fork 按钮，将项目复制到您的GitHub账号**
2. **在您fork的项目页面，点击绿色的 "Code" 按钮**
3. **选择 "Codespaces" 标签页**
4. **点击 "Create codespace on main" 按钮**
5. **等待2-3分钟，系统会自动配置环境并启动项目**
6. **浏览器会自动打开项目预览，您就可以看到网站了！**

### ✨ 功能说明

创建成功后，您将拥有一个完整的跨境指南网站，包含：

- 🏠 **首页**：展示平台特色和最新内容
- 🛠️ **工具导航**：跨境电商工具大全，包含优惠码
- 📚 **干货文章**：实用的运营教程和经验分享
- 🤝 **服务商推荐**：优质出海服务方展示
- 📱 **响应式设计**：完美适配手机和电脑

### 🎨 自定义修改

在Codespaces环境中，您可以直接修改代码：

- 修改 `app/page.tsx` 来更新首页内容
- 修改 `app/tools/page.tsx` 来添加新的工具
- 修改 `app/articles/page.tsx` 来添加文章
- 修改 `app/services/page.tsx` 来添加服务商
- 修改 `app/globals.css` 来调整样式

### 🔧 本地开发（可选）

```bash
# 克隆项目
git clone https://github.com/你的用户名/chuhaizhinan.git
cd chuhaizhinan

# 安装依赖
npm install

# 初始化数据库
npm run prisma:migrate

# 启动开发服务器
npm run dev
```

## 🚀 部署到公网（免费）

### 方法一：一键部署到Vercel（推荐）

1. **注册Vercel账号**: 访问 [vercel.com](https://vercel.com) 并用GitHub登录
2. **导入项目**: 在Vercel控制台点击 "New Project"，选择您fork的项目
3. **配置设置**: 保持默认设置即可，Vercel会自动识别Next.js项目
4. **点击Deploy**: 等待1-2分钟部署完成
5. **获得域名**: Vercel会自动分配一个 `.vercel.app` 域名
6. **绑定自定义域名**: 可选，在项目设置中绑定您自己的域名

### 方法二：其他部署平台

- **Netlify**: 免费托管，操作类似Vercel
- **GitHub Pages**: 适合静态网站
- **Railway**: 支持数据库的云平台

## 🛠️ 技术栈

- **前端**: Next.js 14 + TypeScript + TailwindCSS
- **数据库**: SQLite (开发) / PostgreSQL (生产)
- **UI组件**: Radix UI + shadcn/ui
- **部署**: Vercel / Netlify / Railway

## ❓ 常见问题

### Q: 项目启动失败怎么办？
A: 在Codespaces终端中运行 `chmod +x start.sh && ./start.sh` 重新启动

### Q: 如何修改网站内容？
A: 直接编辑对应的 `.tsx` 文件，保存后会自动刷新预览

### Q: 如何添加新的工具？
A: 编辑 `app/tools/page.tsx` 文件，在 `toolCategories` 数组中添加新工具

### Q: 如何更换网站颜色主题？
A: 修改 `tailwind.config.js` 和 `app/globals.css` 文件中的颜色配置

### Q: 数据库在哪里？
A: 开发环境使用SQLite，数据库文件是 `prisma/dev.db`

### Q: 如何备份数据？
A: 下载 `prisma/dev.db` 文件即可备份所有数据

## 📞 技术支持

- **GitHub Issues**: 在项目页面提交问题
- **文档**: 查看项目README和代码注释
- **社区**: 加入跨境指南交流群

## 📈 后续规划

- [ ] 添加用户注册登录功能
- [ ] 实现文章评论系统
- [ ] 增加工具评分和评论
- [ ] 添加联盟营销跟踪
- [ ] 开发管理后台
- [ ] 集成支付系统
- [ ] 添加数据分析功能

---

**⭐ 如果这个项目对您有帮助，请给个Star支持一下！**

> 💡 提示：这是一个完全开源的项目，您可以自由修改和使用，也欢迎贡献代码！ 