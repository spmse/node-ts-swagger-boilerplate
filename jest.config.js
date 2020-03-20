module.exports = {
	transform: {
		".ts$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
	moduleNameMapper: {
		"~/": "<rootDir>/src/",
		"^Model(.*)$": "<rootDir>/src/model$1",
		"^Services(.*)$": "<rootDir>/src/services$1",
	},
	moduleDirectories: [
		"node_modules",
		"src"
	],
	moduleFileExtensions: [
		"ts",
		"js",
		"node"
	],
	globals: {
		"ts-jest": {
			"diagnostics": false
		}
	},
	transformIgnorePatterns: [
		"!node_modules/"
	],
	verbose: true
};