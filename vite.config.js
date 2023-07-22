import {defineConfig} from "vitest/config";

export default defineConfig(({command, mode, ssrBuild}) => {
        if (mode === "production") {
            return {
                base: '/code-js-tictactoe/',
                loglevel: 'error',
                server: {
                    port: '8080',
                    open: '/code-js-tictactoe/',
                },
                preview: {
                    port: '8080',
                }
            }
        }

        return {
            base: '/',
            loglevel: 'info',
            server: {
                port: '8080',
                open: '/',
            }
        }
    }
)