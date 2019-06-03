export function actionCreator(type) {
  return (payload) => {
    return {
      type,
      payload
    };
  };
}

export function networkActionCreator(type) {
  return {
    submit: actionCreator(`${type}__SUBMIT`),
    resolved: actionCreator(`${type}__RESOLVED`),
    rejected: actionCreator(`${type}__ERROR`),
  };
}
