import React from 'react';
import { t } from '../../utils/translations';
import './AdBanner.scss';

const AdBanner: React.FC = () => {
  // TODO: Integrate Google Ads in future version
  return <div className="ad-banner">{t('adBanner.placeholder')}</div>;
};

export default AdBanner; 