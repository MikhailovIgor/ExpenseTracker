export const signUp = async ({name, email, password}) => {
  try {
    const response = await fetch('http://192.168.96.13:5000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const responseData = await response.json();
    console.log('Your responseData is: ', responseData);
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
