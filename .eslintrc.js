module.exports = {
  "env": {
    "browser": false,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "globals": {
    "document": false,
    "navigator": false,
    "window": false
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "accessor-pairs": "error",
    "arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true
    }],
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "comma-style": ["error", "last"],
    "constructor-super": "error",
    "curly": ["error", "multi-line"],
    "dot-location": ["error", "property"],
    "eol-last": "error",
    "eqeqeq": ["error", "allow-null"],
    "generator-star-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "handle-callback-err": ["error", "^(err|error)$"],
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true
    }],
    "keyword-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "new-cap": ["error", {
      "newIsCap": true,
      "capIsNew": false
    }],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-class-assign": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": ["error", "functions"],
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-implied-eval": "error",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["error", {
      "max": 1
    }],
    "no-native-reassign": 0,
    "no-negated-in-lhs": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": 0,
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sparse-arrays": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": 0,
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unexpected-multiline": "error",
    "no-unneeded-ternary": ["error", {
      "defaultAssignment": false
    }],
    "no-unreachable": "error",
    "no-unused-vars": "error",
    "no-useless-call": 0,
    "no-var": "error",
    "no-with": "error",
    "one-var": [0, {
      "initialized": "never"
    }],
    "operator-linebreak": [0, "after", {
      "overrides": {
        "?": "before",
        ":": "before"
      }
    }],
    "padded-blocks": [0, "never"],
    "prefer-const": "error",
    "quotes": ["error", "single", "avoid-escape"],
    "radix": "error",
    "semi": ["error", "always"],
    "semi-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false
    }],
    "spaced-comment": [0, "always", {
      "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","]
    }],
    "use-isnan": "error",
    "valid-typeof": "error",
    "vars-on-top": "error",
    "wrap-iife": ["error", "any"],
    "yoda": ["error", "never"]
  }
}
