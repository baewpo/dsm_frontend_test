import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			config: path.resolve(__dirname, "src/config"),
			components: path.resolve(__dirname, "src/components"),
			src: path.resolve(__dirname, "src"),
			models: path.resolve(__dirname, "src/models"),
			contexts: path.resolve(__dirname, "src/contexts"),
			pages: path.resolve(__dirname, "src/pages"),
			routes: path.resolve(__dirname, "src/routes"),
		},
	},
	base: '/dsm_frontend_test/'
})
