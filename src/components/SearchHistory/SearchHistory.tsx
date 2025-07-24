import React from 'react';
import { useTranslation } from 'react-i18next';

const SearchHistory: React.FC = () => {
  const { t } = useTranslation();
  // TODO: Implement localStorage-based search history in future version
  return <div style={{ minHeight: 60, background: '#e0e0e0', textAlign: 'center', padding: 16 }}>{t('searchHistory.placeholder')}</div>;
};

export default SearchHistory; 