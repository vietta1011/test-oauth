import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithFacebook() {
  function facebookLogin() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email || "",
            firstName: user.displayName || "",
            photo: user.photoURL || "",
            lastName: "",
          });
          toast.success("User logged in successfully with Facebook", {
            position: "top-center",
          });
          window.location.href = "/profile";
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Facebook login failed!", {
          position: "top-center",
        });
      });
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={facebookLogin}
      >
        <img
          src={require("../facebook.png")}
          width={"60%"}
          alt="Facebook login"
        />
      </div>
    </div>
  );
}

export default SignInwithFacebook;
