# Email Setup Guide

## Using Resend (Recommended)

### 1. Create Resend Account
- Go to [resend.com](https://resend.com)
- Sign up for a free account (3,000 emails/month)

### 2. Get API Key
- In your Resend dashboard, go to "API Keys"
- Create a new API key
- Copy the key (starts with `re_`)

### 3. Add Environment Variable
Add this to your Vercel project environment variables:
\`\`\`
RESEND_API_KEY=re_your_api_key_here
\`\`\`

### 4. Verify Domain (Important!)
- In Resend dashboard, go to "Domains"
- Add your domain (e.g., `yourdomain.com`)
- Follow DNS verification steps
- Update the `from` field in `/app/api/contact/route.ts`:
  \`\`\`ts
  from: 'Contact Form <noreply@yourdomain.com>'
  \`\`\`

## Alternative: Nodemailer with Gmail

If you prefer using Gmail instead:

### 1. Enable 2-Factor Authentication
- Go to your Google Account settings
- Enable 2-factor authentication

### 2. Create App Password
- Go to Google Account > Security > App passwords
- Generate password for "Mail"
- Copy the 16-character password

### 3. Environment Variables
\`\`\`
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-app-password
\`\`\`

### 4. Update API Route
Replace Resend code with Nodemailer:
\`\`\`ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
\`\`\`

## Testing
- Fill out the contact form
- Check your email at contact@mayfair.com.pk
- Check browser console for any errors
