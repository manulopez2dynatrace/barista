module.exports = {
  "plugins": [
    "./tools/stylelint/selector-no-deep/index.js",
    "./tools/stylelint/no-nested-mixin/index.js"
  ],
  "rules": {
    "stylelint/selector-no-deep": true,
    "stylelint/no-nested-mixin": true,
    "color-hex-case": "lower",
    "color-no-invalid-hex": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-name-case": "lower",
    "function-url-quotes": "always",
    "function-url-scheme-blacklist": [
      "data"
    ],
    "function-whitespace-after": "always",
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "length-zero-no-unit": true,
    "property-blacklist": [
      "font-family"
      ],
    "string-no-newline": true,
    "string-quotes": "single",
    "unit-case": "lower",
    "unit-no-unknown": true,
    "unit-whitelist": [
      "px",
      "%",
      "deg",
      "ms",
      "em",
      "rem",
      "vh",
      "vw",
      "vmin",
      "s"
    ],
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "shorthand-property-no-redundant-values": true,
    "property-case": "lower",
    "declaration-block-no-duplicate-properties": [
      true,
      {
        "ignore": [
          "consecutive-duplicates-with-different-values"
        ]
      }
    ],
    "declaration-block-trailing-semicolon": "always",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-property-value-blacklist": [
      {
        "/.*/": [
          "initial"
        ]
      },
      {
        "message": "The `initial` value is not supported in IE."
      }
    ],
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-before": "always-multi-line",
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-max-id": 0,
    "no-missing-end-of-source-newline": true,
    "max-line-length": 100
  }
};
