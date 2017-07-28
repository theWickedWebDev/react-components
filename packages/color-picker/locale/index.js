import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...es, ...fr]);

export default {
  en: require('./en.json'),
  es: require('./es.json'),
  fr: require('./fr.json'),
};
