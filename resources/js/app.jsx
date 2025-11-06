// 1. Import bootstrap (WAJIB untuk Laravel Echo / Reverb)
import './bootstrap';

// 2. Import CSS (Tailwind)
import '../css/app.css';

// 3. Import React & Inertia
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// 4. Import Layout Utama
import MainLayout from './Layouts/MainLayout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// 5. Buat Aplikasi Inertia
createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    // Tentukan resolver halaman dengan persistent layout
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        );

        // Set persistent layout untuk semua halaman KECUALI Cover
        page.then((module) => {
            if (name !== 'Cover') {
                module.default.layout = module.default.layout ||
                    ((page) => <MainLayout>{page}</MainLayout>);
            }
        });

        return page;
    },

    // 6. Setup
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },

    // Progress bar saat pindah halaman
    progress: {
        color: '#4B5563',
        showSpinner: true,
    },
});
