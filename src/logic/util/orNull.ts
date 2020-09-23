import ternary from 'logic/util/ternary'

export default (bool: boolean, truthy: any) => ternary(bool, truthy, null)
