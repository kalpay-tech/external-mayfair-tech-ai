import type React from "react"
interface EmailTemplateProps {
  firstName: string
  lastName: string
  email: string
  company?: string
  service?: string
  message: string
}

export const ContactEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  company,
  service,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
    <h2 style={{ color: "#1f2937", borderBottom: "2px solid #3b82f6", paddingBottom: "10px" }}>
      New Contact Form Submission
    </h2>

    <div style={{ backgroundColor: "#f9fafb", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
      <h3 style={{ color: "#374151", marginTop: "0" }}>Contact Information</h3>
      <p>
        <strong>Name:</strong> {firstName} {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      {company && (
        <p>
          <strong>Company:</strong> {company}
        </p>
      )}
      {service && (
        <p>
          <strong>Service Interest:</strong> {service}
        </p>
      )}
    </div>

    <div style={{ margin: "20px 0" }}>
      <h3 style={{ color: "#374151" }}>Message</h3>
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "6px",
          padding: "15px",
          whiteSpace: "pre-wrap",
        }}
      >
        {message}
      </div>
    </div>

    <div
      style={{
        marginTop: "30px",
        paddingTop: "20px",
        borderTop: "1px solid #e5e7eb",
        fontSize: "14px",
        color: "#6b7280",
      }}
    >
      <p>Sent from Mayfair Tech AI website contact form</p>
      <p>Time: {new Date().toLocaleString()}</p>
    </div>
  </div>
)
