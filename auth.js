import store from './store';

store.subscribe(listener);

function listener(){
    return new Promise((resolve, reject) => {
        const access_token = store.getState().account;

        if(access_token.oauth.access_token.length > 0){
            resolve(true);
        }
        else{
            resolve(false);
        }
    });
}

export const isSignedIn = () => listener();