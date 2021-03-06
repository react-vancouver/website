module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/config/jest-preprocess.js`,
  },
  moduleNameMapper: {
    'react-spring': '<rootDir>/node_modules/react-spring/web.cjs',
    'react-spring/renderprops':
      '<rootDir>/node_modules/react-spring/renderprops.cjs',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  modulePathIgnorePatterns: ['<rootDir>/src/components/constructs/Layout'], //#FIXME: idk what's happening here but Jest doesn't like it
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/config/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/config/jest.setup.js`],
};
