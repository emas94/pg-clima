const API_URL = process.env.MAIL_API

async function asyncFetch(url, data) {
  let response = await fetch(url, {
    method: "POST",
    body: data,
  })
  if (response.ok) return await response.json()
  throw new Error(response.statusText)
}

export async function handleSendMessage(name, email, phone, message) {
  const formData = new FormData()
  formData.append("name", name)
  formData.append("email", email)
  formData.append("phone", phone)
  formData.append("message", message)
  try {
    return await asyncFetch(API_URL, formData)
  } catch (err) {
    return false
  }
}
