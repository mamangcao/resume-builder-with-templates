export const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Resume Builder",
    "url": "https://resume-mamangcao.vercel.app",
    "description": "A free, client-side resume builder offering Harvard and Modern templates.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": "Real-time preview, PDF export, ATS-friendly templates, Local storage persistence",
    "author": {
      "@type": "Person",
      "name": "Abdul Haleem Mamangcao"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};