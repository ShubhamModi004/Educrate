import React from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import withLayout from '../layout';
import Link from '../components/Link';
import Landing from '../components/AboutComponent/AboutLanding';
import Sections from '../components/AboutComponent/Sections';
import Edupeople from '../components/AboutComponent/Edupeople';



const AboutPage = () => (
  <>
  <SEO title="About us" keywords={[`EDUCRATE`, `PROJECTORS FOR SCHOOLS`, `BEST PROJECTORS IN SCHOOL`, `SMART CLASSROOM`, `PROJECTOR COMPANIES IN KANPUR`, `SMART EDUCATION FOR STUDENTS`]} />
  <Landing />
  <Sections />
  <Edupeople />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(AboutPage);
