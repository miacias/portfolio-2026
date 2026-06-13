/**
 * 
 * @param e - the form submission event
 * 
 * NOTE: testing locally will only work if domain-restriction protocols are disabled in EmailJS (paid feature)
 * Visit https://dashboard.emailjs.com/admin/account/security and remove "Your requests are restricted to the domains listed below" for local testing
 */
export const contactFormSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(e.currentTarget);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      alert("Thank you for your message! I will get back to you shortly.");
      form.reset();
    } else {
      const { error } = await response.json();
      console.error("EmailJS error:", error);
    }
  } catch (err) {
    console.error(err);
  }
};
