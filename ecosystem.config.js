module.exports = {
    apps: [{
        name: 'pandoc-api',
        script: 'lib/index.js',
        args: 'start',
        watch: ['lib'],
        ignore_watch: ['node_modules'],
        instances: 1,
        autorestart: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production',
            HOSTNAME: '0.0.0.0',
            PORT: 5555
        },
        error_file: 'logs/err.log',
        out_file: 'logs/out.log',
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm:ss'
    }]
}; 