# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-object-initialiser > invalid-proto-identifier-literal`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
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
			index: 41
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Redefinition of __proto__ property"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "script"
				end: Object {
					column: 31
					index: 31
					line: 1
				}
				start: Object {
					column: 20
					index: 20
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 40
					index: 40
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSObjectExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 39
						index: 39
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				properties: Array [
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "__proto__"
								loc: Object {
									filename: "input.js"
									identifierName: "__proto__"
									end: Object {
										column: 12
										index: 12
										line: 1
									}
									start: Object {
										column: 3
										index: 3
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 12
									index: 12
									line: 1
								}
								start: Object {
									column: 3
									index: 3
									line: 1
								}
							}
						}
						value: JSNullLiteral {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 18
									index: 18
									line: 1
								}
								start: Object {
									column: 14
									index: 14
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 18
								index: 18
								line: 1
							}
							start: Object {
								column: 3
								index: 3
								line: 1
							}
						}
					}
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSStringLiteral {
								value: "__proto__"
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 31
										index: 31
										line: 1
									}
									start: Object {
										column: 20
										index: 20
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 31
									index: 31
									line: 1
								}
								start: Object {
									column: 20
									index: 20
									line: 1
								}
							}
						}
						value: JSNullLiteral {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 37
									index: 37
									line: 1
								}
								start: Object {
									column: 33
									index: 33
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 37
								index: 37
								line: 1
							}
							start: Object {
								column: 20
								index: 20
								line: 1
							}
						}
					}
				]
			}
		}
	]
}
```
