const ROUTES = [
    {
        url: '/free',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/premium',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/premium`]: '',
            },
        }
    },
    {
        url: '/student_list_service',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:3001",
            changeOrigin: true,
            pathRewrite: {
                [`^/student_list_service`]: '',
            },
        }
    },
    {
        url: '/student_details_service',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:3002",
            changeOrigin: true,
            pathRewrite: {
                [`^/student_details_service`]: '',
            },
        }
    }
]

module.exports = ROUTES;