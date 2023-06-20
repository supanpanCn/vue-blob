module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feature', // 迭代功能
                'conf', // 修改构建配置
                'fixbug', // 修复bug
                'refactor', // 代码重构
                'optimize', // 代码优化
                'style', // 仅修改样式文件
                'docs', // 文档补充说明
            ],
        ],
        'header-max-length': [0, 'always', 72], //限制最长72
    },
};
