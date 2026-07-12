"use server";

export async function submitContact(data: any) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // TODO: integrate with actual email/CRM provider
  console.log("Contact submission received:", data);
  
  return { success: true, message: "Thank you for reaching out. Our team will contact you shortly." };
}

export async function submitQuery(data: any) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Query submission received:", data);
  return { success: true, message: "Your query has been submitted successfully." };
}
