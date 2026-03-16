module.exports = {
  default: {
    require: ['step-definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    paths: ['features/**/*.feature'],
    parallel: 2,
  },
};
