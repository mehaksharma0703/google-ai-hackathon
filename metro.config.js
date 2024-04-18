module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        sourceExts: ['jsx', 'js', 'json', 'ts', 'tsx'], // Add any additional file extensions as needed
    },
};
