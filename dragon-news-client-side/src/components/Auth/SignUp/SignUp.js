import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SignUp = () => {
  const { signUpEmailPasswordBaseUser } = useContext(AuthContext);

  const handleSignUpform = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // eslint-disable-next-line no-unused-vars
    const confirm = form.confirm.value;

    signUpEmailPasswordBaseUser(email, password)
      .then((userCredential) => {
      // Signed in
        const { user } = userCredential;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <form className="border p-3 rounded mb-4" onSubmit={handleSignUpform}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
          <input type="password" name="confirm" className="form-control" id="exampleInputPassword2" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Sign up</button>
        </div>
      </form>
      <div className="border p-3 rounded mb-4">
        <div className="d-flex justify-content-center p-4">
          <p className="mb-0 px-1">Have an account?</p>
          <Link to="/signin">Sign in</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
