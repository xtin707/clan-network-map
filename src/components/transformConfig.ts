//https://bettertyped.github.io/react-zoom-pan-pinch/?path=/docs/docs-props--page

export const transformConfig = {
  initialScale: 1,
  minScale: 0.01,
  maxScale: 50,
  centerOnInit: true,

  wheel: {
    step: 0.05,
    smoothStep: 0.005,
    wheelDisabled: false,
    touchPadDisabled: false
  },

  pinch: {
    step: 0.05,
    disabled: false
  },

  panning: {
    disabled: false,
    velocityDisabled: false,
    lockAxisX: false,
    lockAxisY: false,
    allowLeftClickPan: true,
    allowRightClickPan: true,
    allowMiddleClickPan: true,
    wheelPanning: true
  },

  doubleClick: {
    disabled: false,
    step: 0.3,
    mode: 'zoomIn' as const
  },

  zoomAnimation: {
    disabled: false,
    size: 0.2,
    animationTime: 200,
    animationType: 'easeInOutQuart' as const
  },

  alignmentAnimation: {
    disabled: false,
    sizeX: 200,
    sizeY: 200,
    animationTime: 200,
    velocityAlignmentTime: 400,
    animationType: 'easeOutQuart' as const
  },

  velocityAnimation: {
    disabled: false,
    sensitivity: 0.8,
    animationTime: 300,
    animationType: 'easeOutQuart' as const
  },
  
  limitToBounds: false,
  centerZoomedOut: true,
  disablePadding: true,
  smooth: true
};