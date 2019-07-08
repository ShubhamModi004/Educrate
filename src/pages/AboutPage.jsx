import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import withLayout from '../layout';
import Link from '../components/Link';
import Landing from '../components/AboutComponent/AboutLanding';
import Sections from '../components/AboutComponent/Sections';

const AboutPage = ({ location }) => {
  return (
    <Fragment>
      <SEO title="About us" keywords={[`EDUCRATE`, `PROJECTORS FOR SCHOOLS`, `BEST PROJECTORS IN SCHOOL`, `SMART CLASSROOM`, `PROJECTOR COMPANIES IN KANPUR`, `SMART EDUCATION FOR STUDENTS`]} />
      <Landing />
      <Sections missionBlock={location.state.missionBlock ? true : false} />
    </Fragment>
  )
};

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(AboutPage);
