import screens from './screens';

const mediaQuery = (key: keyof typeof screens) => (style: TemplateStringsArray | String) => `@media (max-width: ${screens[key]}px) { ${style} }`;

export default mediaQuery;
