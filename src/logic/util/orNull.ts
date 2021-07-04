import ternary from 'logic/util/ternary';

const orNull = (bool: boolean, truthy: any) => ternary(bool, truthy, null);

export default orNull;
