import React from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import withLayout from '../layout';
import Link from '../components/Link';
import Landing from '../components/FAQ/Landing';
import Faqsection from '../components/FAQ/Faqsection';



const FaqPage = () => (
  <>
  <SEO title="FAQ" />

  <Landing />
  <Faqsection />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(FaqPage);
