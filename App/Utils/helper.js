import AsyncStorage from '@react-native-async-storage/async-storage';

const api = (endPoint, params = null, method, headers = null) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('token');
    let localHeader = {};
    if (token) {
      localHeader = {Authorization: `Bearer ${token}`};
    }
    console.log('header', {
      ...localHeader,
      ...headers,
    });

    fetch(endPoint, {
      headers: {
        ...localHeader,
        ...headers,
      },
      method: method,
      body: params,
    })
      .then(resp => resp.json())
      .then(responseData => {
        if (
          responseData.success == true ||
          responseData?.status === 'success'
        ) {
          var resp = {
            success: true,
            data: responseData?.response
              ? responseData?.response
              : responseData?.data,
            message: responseData?.message || 'Data found!',
            type: 'Success',
          };
          resolve(resp);
        } else {
          var resp = {
            success: false,
            message: responseData?.data?.message
              ? responseData?.data?.message
              : responseData?.message
              ? responseData?.message
              : responseData?.response,
            messageType: 'Error',
          };
          resolve(resp);
        }
      })
      .catch(error => {
        console.log('error :>> ', error);
        if (
          error?.response?.status === 401 ||
          error?.response?.statusText === 'Unauthorized'
        ) {
          store.dispatch(logout());
          // store
          resolve({success: false, message: error?.response?.data?.message});
        }
        if (
          error?.response?.status === 400 ||
          error?.response?.status === 403 ||
          error?.response?.status === 500
        ) {
          resolve({success: false, message: error?.response?.data?.message});
        }
        var resp = {
          success: false,
          message: String(error) || 'Unable to connect API',
          messageType: 'Error',
        };
        resolve(resp);
      });
  });
};

export {api};
