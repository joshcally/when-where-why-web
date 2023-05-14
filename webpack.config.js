module.exports = {
    module: {
        rules: [
            {
              test: /\.(csv|tsv)$/i,
              use: ['csv-loader'],
            },
        ]
    }
};