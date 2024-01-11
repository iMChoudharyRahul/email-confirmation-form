import { useState } from "react";
import Form from "./Form";
import Confirmation from "./Confirmation";
import emailjs from "emailjs-com";

const steps = ["Step 1", "Step 2", "Step 3"];
let initialValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
};
const initialErrorValues = {
  nameError: "",
  emailError: "",
  mobileError: "",
  serviceError: "",
};

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialValues);
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState(initialErrorValues);

  const errorValidator = () => {
    // Reset errors
    setError(initialErrorValues);

    let hasErrors = false;

    if (!formData.name.trim()) {
      setError((prevError) => ({
        ...prevError,
        nameError: "Name must be required",
      }));
      hasErrors = true;
    }

    if (formData.email === "") {
      setError((prevError) => ({
        ...prevError,
        emailError: "Email is required",
      }));
      hasErrors = true;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        setError((prevError) => ({
          ...prevError,
          emailError: "Invalid email address",
        }));
        hasErrors = true;
      }
    }

    if (currentStep === 2 && !formData.service) {
      setError((prevError) => ({
        ...prevError,
        serviceError: "Please select a service",
      }));
      hasErrors = true;
    }

    return !hasErrors; // Return true if there are no errors
  };

  const handleSubmit = async () => {
    try {
      // Send email
      const templateParams = {
        to_email: formData.email,
        to_name: formData.name,
        service_name: formData.service,
      };

      if (errorValidator()) {
        await emailjs.send(
          import.meta.env.VITE_REACT_APP_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_REACT_APP_USER_ID
        );
        // Show confirmation message
        setConfirmation(true);
      }
    } catch (error) {
      console.error("EmailJS send error:", error);
    }
  };

  const handleNext = () => {
    if (errorValidator()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleChange = (field, value) =>
    setFormData((prevData) => ({ ...prevData, [field]: value }));

  const handleSendAgain = () => {
    setFormData({});
    setCurrentStep(0);
    setConfirmation(false);
  };

  if (confirmation) {
    return <Confirmation onSendAgain={handleSendAgain} />;
  }

  return (
    <div>
      <h2 className="current-step">{steps[currentStep]}</h2>
      <Form
        step={currentStep}
        onChange={handleChange}
        onNext={handleNext}
        onSubmit={handleSubmit}
        formData={formData}
        errorMsg={error}
      />
    </div>
  );
};

export default Home;
