//https://bettertyped.github.io/react-zoom-pan-pinch/?path=/docs/docs-props--page

export const transformConfig = {
  initialScale: 1.0,
  minScale: 0.1,
  maxScale: 5,
  centerOnInit: true,

  wheel: {
    step: 0.1,
    smoothStep: 0.01,
    wheelDisabled: false,
    touchPadDisabled: false
  },

  pinch: {
    step: 0.1,
    disabled: false
  },

  panning: {
    disabled: false,
    velocityDisabled: false,
    lockAxisX: false,
    lockAxisY: true,
    allowLeftClickPan: true,
    allowRightClickPan: true,
    allowMiddleClickPan: true,
    wheelPanning: false
  },

  doubleClick: {
    disabled: false,
    step: 0.7,
    mode: 'zoomIn' as const
  },

  zoomAnimation: {
    disabled: false,
    size: 0.4,
    animationTime: 300,
    animationType: 'easeInOutQuart' as const
  },

  alignmentAnimation: {
    disabled: false,
    sizeX: 100,
    sizeY: 100,
    animationTime: 300,
    velocityAlignmentTime: 400,
    animationType: 'easeOutQuart' as const
  },

  velocityAnimation: {
    disabled: false,
    sensitivity: 1,
    animationTime: 400,
    animationType: 'easeOutQuart' as const
  },
  
  limitToBounds: false,
  centerZoomedOut: true,
  disablePadding: false,
  smooth: true
};