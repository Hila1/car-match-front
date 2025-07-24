import React from 'react';
import { useTranslation } from 'react-i18next';
import './AdBanner.scss';

const AdBanner: React.FC = () => {
  const { t } = useTranslation();
  // TODO: Integrate Google Ads in future version
  return <div className="ad-banner">{t('adBanner.placeholder')}</div>;
};

export default AdBanner; 