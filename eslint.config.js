export default [
    {
      ignores: ["node_modules/**", "dist/**", "build/**"],
    },
    {
      files: ["**/*.js"],
      rules: {

        "no-unused-vars": "warn",
        "semi": ["error", "always"],

      },
    },
  ];