'use client';

import Script from 'next/script';

const GoogleAdsConversion = () => {
  return (
    <Script id="google-ads-conversion-event">
      {`
        gtag('event', 'conversion', {'send_to': 'AW-17366889216/zJRqCODbz_IaEIDmltlA'});
      `}
    </Script>
  );
};

export default GoogleAdsConversion;
