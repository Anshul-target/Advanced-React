import { useState } from "react";
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  // const toogleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false);
  //     return;
  //   }

  //   setShowAlert(true);

  // };
  return (
    <div>
      <button
        onClick={() => {
          setShowAlert(!showAlert);
        }}
      >
        Toggle
      </button>
      <Alert />
    </div>
  );
};
const Alert = () => {
  return <div className="alert alert-danger">Hello World </div>;
};

export default ToggleChallenge;
