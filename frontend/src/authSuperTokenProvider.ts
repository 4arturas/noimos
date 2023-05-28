import ThirdPartyEmailPassword from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

interface User {
    username:string, password:string
}

const authProvider = {
    login: async (user:User) => {
        const response = await ThirdPartyEmailPassword.emailPasswordSignIn({
            formFields: [
                {
                    id: "email",
                    value: user.username,
                },
                {
                    id: "password",
                    value: user.password,
                },
            ],
        });
        console.log(response.status);
        if (response.status === "WRONG_CREDENTIALS_ERROR") {
            // the input email / password combination did not match,
            // so we show an appropriate error message to the user
            // this.errorMessage = "Invalid credentials";
            // this.error = true;
            return;
        }
        if (response.status === "FIELD_ERROR") {
            response.formFields.forEach((item) => {
                if (item.id === "email") {
                    // this means that something was wrong with the entered email.
                    // probably that it's not a valid email (from a syntax point of view)
                    // this.emailError = item.error;
                } else if (item.id === "password") {
                    // this.passwordError = item.error;
                }
            });
            return;
        }
        // login is successful, and we redirect the user to the home page.
        // Note that session cookies are added automatically and nothing needs to be
        // done here about them.
        localStorage.setItem('username', user.username);
        window.location.assign("/");
        return Promise.resolve();
    },
    logout: () => {

        Session.signOut();
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    checkError:  (error:any) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            // fullName: 'John'
        }),
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;