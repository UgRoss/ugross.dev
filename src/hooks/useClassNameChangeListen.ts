import { useEffect, useState } from 'react';

const config = { attributes: true, attributeFilter: ['class'] };
export const useClassNameChangeListen = (element: HTMLElement, className: string) => {
  const checkHasClassName = (): boolean => element.classList.contains(className);

  const [hasClassName, setHasClassName] = useState(checkHasClassName());
  const observer = new MutationObserver(() => {
    setHasClassName(checkHasClassName());
  });

  useEffect(() => {
    observer.observe(element, config);
    return () => observer.disconnect();
  }, []);

  return [hasClassName];
};
