import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                background: './background.js',
                content: './content.js',
                main: './main.js',
                util: './util.js'
            },
            output: {
                entryFileNames: 'assets/[name].js',
            },
        },
        outDir: 'dist',
    },
});