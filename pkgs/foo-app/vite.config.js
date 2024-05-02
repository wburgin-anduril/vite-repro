export default {
    base: "./",
    clearScreen: false,
    optimizeDeps: {
        exclude: ["@monorepo/foo-lib"],
        // include: ["react"],
    }
};
