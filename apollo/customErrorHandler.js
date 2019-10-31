export default (apolloError, { route }) => {
  // console.log(apolloError)
  // eslint-disable-next-line no-console
  console.log('error: ' + route.path)
  // eslint-disable-next-line semi
};
