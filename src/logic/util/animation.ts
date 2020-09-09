// png values are pulled from image itself
const streetPngHeight = 625
export const streetDisplayHeight = 104
const streetRatio = streetDisplayHeight / streetPngHeight

const streetPngWidth = 1040
const streetDisplayWidth = streetPngWidth * streetRatio

export const getWalkAnimationDistance = (windowSize: number) => (
	Math.ceil(windowSize / streetDisplayWidth) * streetDisplayWidth
)
