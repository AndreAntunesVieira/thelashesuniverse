import Head from "next/head";

const MainView = ({
  title,
  description,
  canonical,
  image = "",
  imageWidth = "1200",
  imageHeight = "600",
  imageAlt = null,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      {canonical && (
        <>
          <link rel="canonical" href={canonical} />
          <meta property="og:url" content={canonical} />
        </>
      )}

      <meta name="twitter:image:src" content={image} />
      <meta property="og:image" content={image} name="image" />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <meta property="og:site_name" content="The Lashes Universe" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, archive" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="public_figure" />
      <meta
        name="author"
        content="André Antunes Vieira | Agência Marketing Inteligente"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Q8WSHQXDM1"
      ></script>
      <script
        async
        defer
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q8WSHQXDM1');`,
        }}
      />
      <script
        async
        defer
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '3414661575480290');
        fbq('track', 'PageView');`,
        }}
      />
      <meta name="facebook-domain-verification" content="6jno1l40cm6un7wx8airmr0m1ig2tv" />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=3414661575480290&ev=PageView&noscript=1"
        />
      </noscript>
    </Head>
    {children}
  </>
);

export default MainView;
