export default (bool: boolean, truthy: any, falsey: any) => {
	if (bool) {
		return truthy
	}
	return falsey
}
