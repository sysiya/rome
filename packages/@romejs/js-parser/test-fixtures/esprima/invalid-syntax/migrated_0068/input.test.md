# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0068`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 6
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "js-parser"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unknown start to an statement expression"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "script"
				end: Object {
					column: 5
					index: 5
					line: 1
				}
				start: Object {
					column: 0
					index: 6
					line: 2
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 0
					index: 6
					line: 2
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSBinaryExpression {
				operator: "+"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 0
						index: 6
						line: 2
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				right: JSReferenceIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 0
							index: 6
							line: 2
						}
						start: Object {
							column: 0
							index: 6
							line: 2
						}
					}
				}
				left: JSNumericLiteral {
					value: 1
					format: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 1
							index: 1
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
			}
		}
	]
}
```
