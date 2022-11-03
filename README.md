# eslint-plugin-customize

自定义规则集

简体中文 | [English](./README-EN.md)

#### 包含规则：
- no-date-parse  禁止使用 Date.parse 格式化字符串
- no-new-date-single  禁止使用 new Date 时，传入单个参数
- no-todo-comment  禁止提交 todo 注释，应检查是否有需要完善的功能
- no-var  禁止使用 var 声明变量

## 安装

首先需要安装 [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

再安装 `eslint-plugin-customize`:

```sh
npm install eslint-plugin-customize --save-dev
```

## 使用
### 可以通过配置 extends 来引入
```json
{
    "extends": [
        "plugin:customize/recommended"
    ]
}
```
通过这种方式配置，所有的 rule 均生效，如果需要调整某个规则可以单独在 `rules` 进行覆盖 
#### 或者，通过配置 plugins 和 rules
添加 `customize` 到 `.eslintrc` 配置文件的 `plugins`，可以省略 `eslint-plugin-` 前缀：

```json
{
    "plugins": [
        "customize"
    ]
}
```

然后在 `rules` 配置您要使用的规则。

```json
{
    "rules": {
        "customize/no-todo-comment": 2 // 0 = off, 1 = warn, 2 = error
    }
}
```
通过 `plugins` 引入，每条规则都需要在 `rules` 中进行配置才会生效。