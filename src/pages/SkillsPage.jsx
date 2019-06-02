import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Link from '../components/Link';
import SkillsLanding from '../components/Skills/SkillsLanding';
import SkillsTopic from '../components/Skills/SkillsTopic';


const IndexPage = () => (
  <>
    <SkillsLanding />
    <SkillsTopic />
  </>
);

const customProps = {
    localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
