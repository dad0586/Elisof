
"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form, Mentions } from 'antd';
import "./send-request.scss"
import { useTranslations } from "next-intl";



const SendRequest = () => {
  const t = useTranslations("SendRequest");

  const [phone, setPhone] = useState("");

  return (
    <>
      <section>
        <div className="myContainer">
          <h2 className="send-request-title">{t("title")}</h2>
          <h4 className="send-request-description">{t("description")}</h4>
          <div className="send-request-box">
            <div className="send-request-img">
              <img src="./imgs/image.png" alt="Send Request img" />
            </div>
            <div className="send-request-inputs">
              <input
                type="text"
                id="name"
                placeholder={t("name")}
              />
              <input
                type="text"
                id="secondname"
                placeholder={t("secondname")}
              />
              <input
                className="send-request-email"
                type="email"
                id="email"
                placeholder={t("email")}
              />
              <div>
                <PhoneInput
                  country={"uz"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{
                    width: "100%",
                    height: "58px",
                    fontSize: "16px",
                  }}
                  buttonStyle={{
                    background: "transparent",
                    border: "1px solid rgb(225, 218, 218)",
                    width: "12%"
                  }}
                />
              </div>
              <textarea
                className="send-request-description"
                id="description"
                placeholder={t("request")}
              ></textarea>
              <button>{t("button")}</button>
            </div>
          </div>
        </div >
      </section>
    </>
  )
}

export default SendRequest;
