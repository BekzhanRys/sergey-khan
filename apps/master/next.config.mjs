/** @type {import('next').NextConfig} */
const nextConfig = {
  // Включаем статический экспорт (Next.js 13.3+)
  output: 'export',

  // Если нужно транспилить локальные пакеты
  transpilePackages: ["@workspace/ui"],

  // Настраиваем базовый путь, совпадающий с URL GitHub Pages
  basePath: '/sergeykhan/master',

  // Откуда грузятся ассеты (CSS, JS)
  assetPrefix: '/sergeykhan/master',
};

export default nextConfig;