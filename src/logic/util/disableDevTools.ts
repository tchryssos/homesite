// Credit to https://github.com/facebook/react-devtools/issues/191#issuecomment-443607190

export default (): void => {
	const noop = (): void => undefined;
	const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__

	if (typeof DEV_TOOLS === 'object') {
			for (const [key, value] of Object.entries(DEV_TOOLS)) {
					DEV_TOOLS[key] = typeof value === 'function' ? noop : null
			}
	}
}