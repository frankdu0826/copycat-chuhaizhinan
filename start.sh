#!/bin/bash

echo "🚀 跨境指南项目启动中..."

# 检查Node.js版本
echo "📦 检查Node.js版本..."
node --version
npm --version

# 安装依赖
echo "📦 安装项目依赖..."
npm install

# 检查环境变量文件
if [ ! -f .env.local ]; then
    echo "⚙️ 创建环境变量文件..."
    cat > .env.local << EOF
# 数据库配置
DATABASE_URL="file:./dev.db"

# NextAuth配置
NEXTAUTH_SECRET="chuhaizhinan-secret-key-2024"
NEXTAUTH_URL="http://localhost:3000"

# 网站信息
NEXT_PUBLIC_SITE_NAME="跨境指南"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_DESCRIPTION="最懂出海人的工具导航栏"
EOF
    echo "✅ 环境变量文件已创建"
fi

# 生成Prisma客户端
echo "🗄️ 生成数据库客户端..."
npx prisma generate

# 运行数据库迁移
echo "🗄️ 初始化数据库..."
npx prisma migrate dev --name init

# 启动开发服务器
echo "🎉 启动开发服务器..."
echo "访问地址: http://localhost:3000"
npm run dev 