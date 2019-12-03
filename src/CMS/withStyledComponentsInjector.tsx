import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';

function StyleInjector({ children }: any) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return iframeRef && <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>;
}

export default function withStyledComponentsInjector(Comp: any) {
  return (props: any) => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}
