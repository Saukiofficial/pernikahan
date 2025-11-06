import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; // Impor plugin React

export default defineConfig({
    plugins: [
        laravel({
            // Tentukan entry points
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(), // Tambahkan plugin React
    ],
});
