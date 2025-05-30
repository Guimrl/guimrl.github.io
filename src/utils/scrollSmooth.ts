export function scrollSmooth(): void {
  const menu: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
    '.navegacao a[href^="#"]',
  );

  function getTheDistanceBetweenTheSectionAndTop(element: any): any {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }

  function nativeScroll(distanceBetweenTheSectionAndTop: number): void {
    window.scrollTo({
      top: distanceBetweenTheSectionAndTop,
      behavior: 'smooth',
    });
  }

  function scrollToSection(event: any): void {
    event.preventDefault();
    const distanceBetweenTheSectionAndTop =
      getTheDistanceBetweenTheSectionAndTop(event.target) - 0;
    nativeScroll(distanceBetweenTheSectionAndTop);
  }

  menu.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
}
