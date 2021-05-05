export const signIn = async ({name, email, password}) => {
  try {
    console.log('Your signin creds are: ', name, email, password);
  } catch (err) {
    console.log(err.message, err);
  }
};

export const logIn = async ({email, password}) => {
  try {
    console.log('Your log creds are: ', email, password);
  } catch (err) {
    console.log(err.message, err);
  }
};

export const logOut = async () => {
  try {
  } catch (err) {
    console.log(err.message, err);
  }
};
