# eslint-plugin-customize

自定义规则集

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-customize`:

```sh
npm install eslint-plugin-customize --save-dev
```

## Usage

Add `customize` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "customize"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "customize/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


