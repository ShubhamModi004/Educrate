import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// importing favicons
import favicon16 from "./images/favicon16.png";
import favicon32 from "./images/favicon32.png";
import favicon64 from "./images/favicon64.png";

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const pageTitle = title || data.site.siteMetadata.title;
        const metaDescription = description || data.site.siteMetadata.description;
        const metaKeywords = keywords.length ? keywords : data.site.siteMetadata.keywords;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={pageTitle}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={[
              { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
              { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
            ]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: pageTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: pageTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                metaKeywords.length > 0
                  ? {
                      name: `keywords`,
                      content: metaKeywords.join(`, `),
                    }
                  : [],
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  title: '',
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
  }
`;
