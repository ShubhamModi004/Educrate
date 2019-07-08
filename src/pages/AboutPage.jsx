import React, { Fragment, useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import withLayout from '../layout';
import Link from '../components/Link';
import Landing from '../components/AboutComponent/AboutLanding';
import Sections from '../components/AboutComponent/Sections';

const AboutPage = ({ location }) => {
  const [missionBlock, setMissionBlock] = useState(false);
  const [visionBlock, setVisionBlock] = useState(false);

  useEffect(() => {
    if (location.state.missionBlock !== null) {
      setMissionBlock(true)
    }
    if (location.state.visionBlock !== null) {
      setVisionBlock(true)
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <SEO title="About us" keywords={[`EDUCRATE`, `PROJECTORS FOR SCHOOLS`, `BEST PROJECTORS IN SCHOOL`, `SMART CLASSROOM`, `PROJECTOR COMPANIES IN KANPUR`, `SMART EDUCATION FOR STUDENTS`]} />
      <Landing />
      {location.state ? (
        <Sections missionBlock={location.state.missionBlock} visionBlock={location.state.visionBlock} />
      ) : (
          <Sections missionBlock={missionBlock} visionBlock={visionBlock} />
        )}
    </Fragment>
  )
};

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(AboutPage);
