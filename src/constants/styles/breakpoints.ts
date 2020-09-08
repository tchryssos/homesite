export const SM_MIN_VALUE: number = 600
export const MD_MIN_VALUE: number = 960
export const LG_MIN_VALUE: number = 1280
export const XL_MIN_VALUE: number = 1920

const mediaString: string = '@media'
export const XS_MAX_STRING: string = `${mediaString} (max-width: ${SM_MIN_VALUE - 1}px)`
export const SM_MIN_STRING: string = `${mediaString} (min-width: ${SM_MIN_VALUE}px)`
export const MD_MIN_STRING: string = `${mediaString} (min-width: ${MD_MIN_VALUE}px)`
export const LG_MIN_STRING: string = `${mediaString} (min-width: ${LG_MIN_VALUE}px)`
export const XL_MIN_STRING: string = `${mediaString} (min-width: ${XL_MIN_VALUE}px)`
