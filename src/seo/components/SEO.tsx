import React, { PropsWithChildren } from 'react';
import isNil from 'lodash/isNil';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Resources } from '../../shared';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  isPost?: string;
}
const SEO = (props: PropsWithChildren<SEOProps>) => {
  const { t } = useTranslation();
  const titleSuffix = t('SEO:Title');
  const { title, description, image = Resources.images.social, isPost = false, children } = props;

  const titleText = isNil(title) ? t('SEO:Title') : `${title} - ${titleSuffix}`;
  const descriptionText = isNil(description) ? t('SEO:Description') : description;
  return (
    <Helmet>
      <title>{titleText}</title>
      <meta name="description" content={descriptionText} />
      <meta name="image" content={image} />

      {isPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={titleText} />
      <meta property="og:description" content={descriptionText} />
      <meta property="og:image" content={image} />
      <meta name="robots" content="noindex,nofollow" />
      {/* TODO: this site does not public, we will add a feature flag for the robots meta tag that instructs search engines not to show the page in search results */}
      {children}
    </Helmet>
  );
};

export default SEO;
