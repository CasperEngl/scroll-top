function scrollTop() {
  if (typeof window.pageYOffset !== 'undefined') {
    // Most browsers except IE8 or below
    return window.pageYOffset
  }

  // Match browser implementations
  return (document.documentElement || document.body.parentNode || document.body).scrollTop
}

if (typeof window !== 'undefined') {
  // @ts-ignore
  window.scrollTop = scrollTop;
}

export default scrollTop;
export { scrollTop };
