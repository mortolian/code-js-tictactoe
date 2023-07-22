import {defineConfig} from "vitest/config";

export default defineConfig(({command, mode, ssrBuild}) => {
        if (mode === "production") {
            return {
                base: '/code-js-tictactoe/',
                loglevel: 'error',
                server: {
                    port: '8080',
                    open: '/',
                }
            }
        }

        return {
            base: '/',
            loglevel: 'info',
            server: {
                port: '8080',
                open: '/',
            },
            preview: {
                port: '8080'
            }
        }
    }
)