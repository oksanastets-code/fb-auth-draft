import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

function App() {
  const [profile, setProfile] = useState(null);
  return (
    <div
      style={{ width: '200px' }}>
      { !profile ? <LoginSocialFacebook
      appId=""
      onResolve={(response) => {
        console.log(response);
        setProfile(response.data);
      }}
      onReject={(error) => {
        console.log(error);
      }}
    >
      <FacebookLoginButton />
      </LoginSocialFacebook> : ''}
      {profile ? <div>
        <h1>{ profile.name}</h1>
        <img src={profile.picture.data.url} alt="" />
      </div>: ''}
    </div>
    
  );
}

export default App;
