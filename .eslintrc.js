module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 0或’off’：关闭规则。
    // 1或’warn’：打开规则，并且作为一个警告（并不会导致检查不通过）。
    // 2或’error’：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
    // 参数说明：
    // 参数1 ： 错误等级
    // 参数2 ： 处理方式
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [2, "always"], // 语句强制分号结尾
    "camelcase": 1, // 强制驼峰法命名
    "comma-dangle": [2, "always-multiline"] // 多行模式必须带逗号，单行模式不能带逗号
  }
}
