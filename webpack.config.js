module.exports = {
    output: {
        publicPath: "/assets/"
    },
    module: {
        rules: [
            {
              test: /\.(csv|tsv)$/i,
              use: ['csv-loader'],
            },
        ]
    }
};