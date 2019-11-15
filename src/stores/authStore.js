import { decorate, observable } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
      console.log("User", decodedUser);
    } else {
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
      console.log("LogedOut !", this.user);
    }
  };

  signupUser = async userData => {
    try {
      const res = await axios.post(
        "https://the-index-api.herokuapp.com/signup/",
        userData
      );
      const user = res.data;
      this.setUser(user.token);
      console.log("USER CREATED", user);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  loginUser = async userData => {
    try {
      const res = await axios.post(
        "https://the-index-api.herokuapp.com/login/",
        userData
      );
      const user = res.data;
      this.setUser(user.token);
      console.log("USER LOGEDIN", user);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  logout = () => {
    this.setUser();
    console.log("LogedOut !", this.user);
  };
}
decorate(AuthStore, {
  user: observable
});
const authStore = new AuthStore();
export default authStore;
