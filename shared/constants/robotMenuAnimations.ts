const REGULAR_DURATION = 300

export const ROBOT_MENU_TIMING = {
  bubbles: {
    duration: REGULAR_DURATION,
    topDelay: REGULAR_DURATION,
    bottomDelay: 500,
  },
  eyes: {
    bouncing: REGULAR_DURATION,
    bouncingDelay: 1200,
  },
  pupils: {
    lookAtBubble: {
      up: REGULAR_DURATION,
      upDelay: 0,
      down: REGULAR_DURATION,
      downDelay: 400,
    },
    lookAtButton: {
      duration: REGULAR_DURATION,
      lookAtUserDelay: REGULAR_DURATION,
      lookAtButtonDelay: 1000,
    },
  },
}
