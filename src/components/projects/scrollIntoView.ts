export const scrollIntoView = (to: React.MutableRefObject<HTMLDivElement | null>) => {
  if (to && to.current) {
    to.current.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
    });
  }
};
