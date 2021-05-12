import React, { useState, useEffect } from "react";

import UserService from "../../services/UserService";

const BoardUser = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        console.log(response.data);
        setUserDetails(response.data);
        //console.log('AAAA : ',userDetails)
      },
      (error) => {
        const errorMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          setUserDetails(errorMessage);
      }
    );
  }, []);
  console.log('DDDDD',userDetails.map((userDetail) => ({userDetail})))

  return (
    <div className="container">
      <header className="jumbotron">
        <>
        <ol>
      {userDetails.map((userDetail) => (
        <li>{userDetail.id}</li>,
        <li>{userDetail.firstName}</li>,
        <li>{userDetail.email}</li>
      ))}
    </ol>
        </>
      </header>
    </div>
  );
};

export default BoardUser;