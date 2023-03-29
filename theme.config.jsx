import Image from "next/image";

const themeConfig = {
  docsRepositoryBase: "https://github.com/UCSF-IGHS/ohri-docs/tree/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – OHRI Forms",
    };
  },
  logo: <Image src="/ohri.svg" alt="OHRI logo" height="10" width="40" />,
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="OHRI Forms: Build OpenMRS form schemas"
      />
      <meta
        name="og:description"
        content="OHRI Forms: Build OpenMRS form schemas"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="apple-mobile-web-app-title" content="OHRI Forms" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
    </>
  ),
  project: {
    link: "https://github.com/UCSF-IGHS/ohri-docs",
  },
  chat: {
    link: "https://openmrs.slack.com/archives/C01PW9FSJBT",
  },
  footer: {
    text: <span>© {new Date().getFullYear()} UCSF</span>,
  },
  darkMode: false,
};

export default themeConfig;
