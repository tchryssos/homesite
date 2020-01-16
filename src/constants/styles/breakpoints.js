export const SM_MIN_VALUE = 600
export const MD_MIN_VALUE = 960
export const LG_MIN_VALUE = 1280
export const XL_MIN_VALUE = 1920

const mediaString = '@media'
export const XS_MAX_STRING = `${mediaString} (max-width: ${SM_MIN_VALUE - 1}px)`
export const SM_MIN_STRING = `${mediaString} (min-width: ${SM_MIN_VALUE}px)`
export const MD_MIN_STRING = `${mediaString} (min-width: ${MD_MIN_VALUE}px)`
export const LG_MIN_STRING = `${mediaString} (min-width: ${LG_MIN_VALUE}px)`
export const XL_MIN_STRING = `${mediaString} (min-width: ${XL_MIN_VALUE}px)`
