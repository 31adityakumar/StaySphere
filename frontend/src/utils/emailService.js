import emailjs from "@emailjs/browser";

export const sendConfirmationEmail = (recipientEmail, bookingData) => { // Accept bookingData
  const serviceId = "service_ig55i58";
  const templateId = "template_48jix3t";
  const userId = "QZUFWKGTD5el4CaPh";

  const emailParams = {
    recipient_email: recipientEmail,
    room_type: bookingData.roomType,
    check_in: bookingData.checkIn,
    check_out: bookingData.checkOut,
    customer_name: bookingData.name,
    hotel_name: bookingData.hotelName,
  };
  return emailjs.send(serviceId, templateId, emailParams, userId);
};