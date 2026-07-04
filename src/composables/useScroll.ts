export const useScroll = () => {
  const scrollTo = (to: string) => {
    const el = document.getElementById(to);
    if (!el) return

    el.scrollIntoView({ behavior: 'smooth' });
  }

  return {
    scrollTo,
  }
}