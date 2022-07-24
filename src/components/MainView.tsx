import Head from "next/head";

const MainView = ({
  title,
  description,
  canonical,
  image = '',
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
    </Head>
    {children}
  </>
);

export default MainView;
