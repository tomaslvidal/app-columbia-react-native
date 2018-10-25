import store from './store';

store.subscribe(listener);

function listener(){
  return new Promise((resolve, reject) => {
    let access_token = store.getState().account;

    if(access_token.oauth!=undefined){
      resolve(true);
    }
    else{
      resolve(false);
    }
  });
}

export const isSignedIn = () => listener();