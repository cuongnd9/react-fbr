export const saveScreen1Data = data => ({
  type: '@screen1/save',
  payload: data,
});

export const saveScreen2Data = data => ({
  type: '@screen2/save',
  payload: data,
});

export const refreshToHome = () => ({
  type: '@global/refreshToHome',
})
