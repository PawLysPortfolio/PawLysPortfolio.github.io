export const scrollIntoView = (
  to: React.MutableRefObject<HTMLDivElement | null>,
  smooth = true,
  block?: ScrollLogicalPosition
) => {
  if (to && to.current) {
    to.current.scrollIntoView({
      behavior: smooth ? 'smooth' : undefined,
      inline: 'start',
      block: block ?? 'start',
    });
  }
};
