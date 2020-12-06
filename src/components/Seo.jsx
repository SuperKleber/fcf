import React from "react";
import { Helmet } from "react-helmet";
const Seo = ({ title, description, image, url, logo, color }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {/* <link rel="canonical" href={url} /> */}
      {/* OpenGraph tags */}

      {/* <meta property="og:url" content={url} /> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta http-equiv="content-language" content="es"></meta>
      {/* Colors */}
      <meta name="theme-color" content={color} />
      {/* FavIcon */}
      <link rel="apple-touch-icon" sizes="57x57" href={logo} />
      <link rel="apple-touch-icon" sizes="60x60" href={logo} />
      <link rel="apple-touch-icon" sizes="72x72" href={logo} />
      <link rel="apple-touch-icon" sizes="76x76" href={logo} />
      <link rel="apple-touch-icon" sizes="114x114" href={logo} />
      <link rel="apple-touch-icon" sizes="120x120" href={logo} />
      <link rel="apple-touch-icon" sizes="144x144" href={logo} />
      <link rel="apple-touch-icon" sizes="152x152" href={logo} />
      <link rel="apple-touch-icon" sizes="180x180" href={logo} />
      <link rel="icon" type="image/png" sizes="192x192" href={logo} />
      <link rel="icon" type="image/png" sizes="32x32" href={logo} />
      <link rel="icon" type="image/png" sizes="96x96" href={logo} />
      <link rel="icon" type="image/png" sizes="16x16" href={logo} />
      <meta name="msapplication-TileImage" content={logo} />
      {/* Manifest */}
      <link rel="manifest" href="/manifest.webmanifest" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <meta name="mobile-web-app-capable" content="yes"></meta>
    </Helmet>
  );
};

export default Seo;
