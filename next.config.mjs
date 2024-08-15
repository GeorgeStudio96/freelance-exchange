import path from "path";
import { fileURLToPath } from "url";

// Определяем __dirname для ES-модулей
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  images: {
    domains: ["plus.unsplash.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
