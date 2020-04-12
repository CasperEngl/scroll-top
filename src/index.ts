export function scrollTop() {
  if (typeof window.pageYOffset !== 'undefined') {
    // Most browsers except IE8 or below
    return window.pageYOffset
  }

  // Match browser implementations
  return (document.documentElement || document.body.parentNode || document.body).scrollTop
}

export default scrollTop
