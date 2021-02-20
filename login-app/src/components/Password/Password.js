import React from "react";
import H1 from "../H1"
import "./password.scss";
import TextInput from "../TextInput"
import Button from '../Button'


function Password() {
  return (
    <div class="password-form">
        <H1 text={"Log in."}></H1>
        <label align="left">Enter Your Password</label>
        <input id="passwordPage:loginForm:login-password" type="password" name="passwordPage:loginForm:login-password" value="" class="form-control pw" placeholder="********"></input>
        {/* <TextInput></TextInput> */}
        {/* <strong class="bold-text">mem.staging+3pfmautomationinuse@gmail.com</strong><input id="passwordPage:loginForm:login-password" type="password" name="passwordPage:loginForm:login-password" value="" class="form-control pw" placeholder="********"></input> */}
        <Button
            color={"button-primary"}
            text={"Next"}
            type={"button"}
            size={"button-large"}
         />,
    </div>
  );
}

export default Password;


