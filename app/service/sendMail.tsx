import { FormEvent } from "react";

export const handleSubmit = async (event: FormEvent, formData: {}) => {
  event.preventDefault();

  console.log(formData);

  try {
    const response = await fetch("/api/sendMail", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.log("falling over");
      throw new Error(`response status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData["message"]);

    alert("Message successfully sent");
  } catch (err) {
    console.error(err);
    alert("Error, please try resubmitting the form");
  }
};
