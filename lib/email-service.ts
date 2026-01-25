import emailjs from "@emailjs/browser";

export type ContactFormData = {
  name: string;
  email: string;
  message: string
}

export const sendEmail = async (formData: ContactFormData ) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      publicKey
    );
    return response;
  } catch (error) {
    throw error;
  }
};