"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./send-request.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BOT_TOKEN = "7589494238:AAHJ984AlKzw1vxfat8PW3CEPqRfBfaSoAA";
const CHAT_ID = "-4737018171";

const SendRequest = () => {
  const t = useTranslations("SendRequest");

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [request, setRequest] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (field: string, value: string) => {
    const newErrors: { [key: string]: string } = { ...errors };

    if (field === "firstName" || field === "lastName") {
      if (value.length > 0 && value.length < 3) {
        newErrors[field] =
          t("nameLengthError") || `${field} must be at least 3 characters`;
      } else {
        delete newErrors[field];
      }
    } else if (field === "email") {
      if (value.length > 0 && !value.includes("@")) {
        newErrors[field] = t("emailError") || "Email must contain @ symbol";
      } else {
        delete newErrors[field];
      }
    }

    setErrors(newErrors);
  };

  const validatePhone = (phone: string) => {
    const newErrors: { [key: string]: string } = { ...errors };


    if (!phone) {
      newErrors.phone = t("requiredField") || "Phone number is required";
    } else if (phone.length < 12) {

      newErrors.phone =
        t("phoneLengthError") ||
        "Phone number must be complete (e.g., +998901234567)";
    } else {
      delete newErrors.phone;
    }

    setErrors(newErrors);
  };

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    field: string
  ) => {
    const value = e.target.value.replace(/[^A-Za-z]/g, "");
    if (value.length <= 20) {
      setter(value);
      validateField(field, value);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateField("email", value);
  };

  const handleRequestChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/).filter(Boolean);
    if (words.length <= 100) {
      setRequest(value);
    }
  };

  const handleBlur = (field: string, value: string) => {
    validateField(field, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!firstName) {
      newErrors.firstName = t("requiredField") || "First name is required";
    } else if (firstName.length < 3) {
      newErrors.firstName =
        t("nameLengthError") || "First name must be at least 3 characters";
    }

    if (!lastName) {
      newErrors.lastName = t("requiredField") || "Last name is required";
    } else if (lastName.length < 3) {
      newErrors.lastName =
        t("lastNameLengthError") || "Last name must be at least 3 characters";
    }

    if (!email) {
      newErrors.email = t("requiredField") || "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = t("emailError") || "Email must contain @ symbol";
    }

    if (!phone) {
      newErrors.phone = t("requiredField") || "Phone number is required";
    } else if (phone.length < 12) {
      newErrors.phone =
        t("phoneLengthError") ||
        "Phone number must be complete (e.g., +998901234567)";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill all required fields correctly", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `📝 *New Request Received* 📝
            👤 *First Name:* ${firstName}
            👥 *Last Name:* ${lastName}    
            📞 *Phone:* ${phone}
            📧 *Email:* ${email}
            📝 *Request:* ${request || "N/A"}`,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        toast.success(t("successMessage") || "Request sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setRequest("");
      } else {
        toast.error(t("errorMessage") || "Failed to send request. Try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(t("errorMessage") || "An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <section>
      <div className="myContainer">
        <h2 id="request" className="send-request-title">
          {t("title")}
        </h2>
        <h4 className="send-request-description">{t("description")}</h4>
        <div className="send-request-box">
          <div className="send-request-img">
            <Image
              src="/imgs/image.png"
              alt="Send Request img"
              width={650}
              height={650}
            />
          </div>
          <form className="send-request-inputs" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                value={firstName}
                onChange={(e) => handleNameChange(e, setFirstName, "firstName")}
                onBlur={() => handleBlur("firstName", firstName)}
                id="name"
                placeholder={t("name")}
              />
              {errors.firstName && (
                <p className="error-text">{errors.firstName}</p>
              )}
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                value={lastName}
                onChange={(e) => handleNameChange(e, setLastName, "lastName")}
                onBlur={() => handleBlur("lastName", lastName)}
                id="secondname"
                placeholder={t("secondname")}
              />
              {errors.lastName && (
                <p className="error-text">{errors.lastName}</p>
              )}
            </div>

            <div className="input-wrapper">
              <input
                className="send-request-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur("email", email)}
                id="email"
                placeholder={t("email")}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="input-wrapper">
              <PhoneInput
                country={"uz"}
                value={phone}
                onChange={(phone: string) => {
                  setPhone(phone);
                  validatePhone(phone); // Real vaqtda tekshirish
                }}
                onBlur={() => validatePhone(phone)}
                inputStyle={{
                  width: "100%",
                  height: "58px",
                  fontSize: "16px",
                }}
                buttonStyle={{
                  background: "transparent",
                  border: "1px solid rgb(225, 218, 218)",
                }}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>

            <textarea
              className="send-request-description"
              value={request}
              onChange={handleRequestChange}
              id="description"
              placeholder={t("request")}
            />

            <button type="submit">{t("button")}</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SendRequest;