import React, { useMemo, useEffect } from 'react'
import { Color } from 'three'
import { useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei/core/Text'

/**
 * Returns a WebGL Troika text mesh styled as the source DOM element
 */

export const WebGLText = ({
  el,
  children,
  material,
  scale,
  font,
  fontOffsetY = 0,
  fontOffsetX = 0,
  overrideEmissive = false,
  color,
  ...props
}) => {
  const { size } = useThree()

  const { textColor, fontSize, textAlign, lineHeight, letterSpacing } = useMemo(() => {
    if (!el.current) return {}
    const cs = window.getComputedStyle(el.current)

    // font size relative letter spacing
    const letterSpacing = (parseFloat(cs.letterSpacing) || 0) / parseFloat(cs.fontSize)
    const lineHeight = (parseFloat(cs.lineHeight) || 0) / parseFloat(cs.fontSize)
    const textColor = new Color(color || cs.color).convertSRGBToLinear()

    return {
      letterSpacing,
      lineHeight,
      textColor,
      fontSize: parseFloat(cs.fontSize) * scale.multiplier,
      textAlign: cs.textAlign,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el, size, scale, color]) // recalc on resize

  useEffect(() => {
    if (material && overrideEmissive) {
      material.emissive = color
    }
  }, [material, color, overrideEmissive])

  let xOffset = 0
  if (textAlign === 'left' || textAlign === 'start') {
    xOffset = scale.width * -0.5
  } else if (textAlign === 'right' || textAlign === 'end') {
    xOffset = scale.width * 0.5
  }

  const yOffset = scale ? scale.height * 0.5 : size.height * 0.5

  return (
    <Text
      fontSize={fontSize}
      maxWidth={scale ? scale.width : size.width}
      lineHeight={lineHeight}
      textAlign={textAlign}
      letterSpacing={letterSpacing}
      font={font}
      color={textColor}
      anchorX={textAlign}
      anchorY="top" // so text moves down if row breaks
      position={[xOffset + fontSize * fontOffsetX, yOffset + fontSize * fontOffsetY, 0]} // font specific
      material={material}
      {...props}
    >
      {children}
    </Text>
  )
}

export default WebGLText
