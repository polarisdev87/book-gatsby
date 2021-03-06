// Adapted from https://emotion.sh/docs/media-queries
/** @jsx jsx */
import { css } from "@emotion/core"

const breakpoints = {
  // mobile-first, so there is no 'xs' for portrait phones
  sm: 576, // landscape phones
  md: 768, // tablets
  lg: 992, // landscape tablets and desktops
  xl: 1275, // extra large desktops
}

const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  const prefix = typeof breakpoints[label] === "string" ? "" : "max-width:"
  const suffix = typeof breakpoints[label] === "string" ? "" : "px"
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

export default mq
