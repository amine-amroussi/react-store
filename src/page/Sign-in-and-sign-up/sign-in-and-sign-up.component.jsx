import "./sign-in-and-sign-up.style.scss";

// IMPORT COMPONENTS
import SignIn from "../../Components/sign-in/sign-in.component"
import SignUp from '../../Components/sign-up/sign-up-component'

const SignInSignUpPage = ()=> (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
) 

export default SignInSignUpPage;