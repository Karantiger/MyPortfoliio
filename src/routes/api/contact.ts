import { createFileRoute } from "@tanstack/react-router";
import nodemailer from "nodemailer";
import { z } from "zod";

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200, "Subject too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message too long"),
});

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Email Template - Professional HTML
const escapeHtml = (value: string) => {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

const generateEmailHTML = (data: ContactFormData) => {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const subject = escapeHtml(data.subject);
  const message = escapeHtml(data.message).replace(/\n/g, "<br>");

  const currentDate = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />

  <title>New Portfolio Message</title>
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background-color: #09090b;
    font-family: Arial, Helvetica, sans-serif;
    color: #f4f4f5;
  "
>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="
      width: 100%;
      background-color: #09090b;
    "
  >
    <tr>
      <td
        align="center"
        style="
          padding: 40px 16px;
        "
      >
        <table
          role="presentation"
          width="600"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            width: 100%;
            max-width: 600px;
            background-color: #111113;
            border: 1px solid #27272a;
            border-radius: 20px;
            overflow: hidden;
          "
        >

          <!-- TOP ACCENT -->
          <tr>
            <td
              style="
                height: 4px;
                background-color: #fe6652;
                font-size: 0;
                line-height: 0;
              "
            >
              &nbsp;
            </td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td
              align="center"
              style="
                padding: 38px 32px 32px;
                background-color: #151517;
                border-bottom: 1px solid #27272a;
              "
            >

              <!-- ICON -->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td
                    align="center"
                    valign="middle"
                    style="
                      width: 58px;
                      height: 58px;
                      border-radius: 14px;
                      background-color: #fe6652;
                      font-size: 26px;
                    "
                  >
                    ✉️
                  </td>
                </tr>
              </table>

              <h1
                style="
                  margin: 20px 0 8px;
                  color: #ffffff;
                  font-size: 26px;
                  line-height: 34px;
                  font-weight: 700;
                "
              >
                New Portfolio Message
              </h1>

              <p
                style="
                  margin: 0;
                  color: #a1a1aa;
                  font-size: 14px;
                  line-height: 22px;
                "
              >
                Someone just reached out through your contact form.
              </p>

              <!-- BADGE -->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="margin-top: 18px;"
              >
                <tr>
                  <td
                    style="
                      padding: 7px 14px;
                      border: 1px solid #57312d;
                      border-radius: 50px;
                      background-color: #281815;
                      color: #ff8b7b;
                      font-size: 12px;
                      font-weight: 600;
                    "
                  >
                    ● &nbsp; NEW MESSAGE
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td
              style="
                padding: 32px;
              "
            >

              <!-- INTRO -->
              <p
                style="
                  margin: 0 0 26px;
                  color: #d4d4d8;
                  font-size: 15px;
                  line-height: 25px;
                "
              >
                Hello <strong style="color: #ffffff;">Karan</strong>,
                <br />
                You received a new message from
                <strong style="color: #cf6253;">${name}</strong>.
                Here are the submission details:
              </p>


              <!-- NAME CARD -->
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  margin-bottom: 12px;
                  background-color: #18181b;
                  border: 1px solid #27272a;
                  border-radius: 12px;
                "
              >
                <tr>
                  <td
                    style="
                      width: 4px;
                      background-color: #fe6652;
                    "
                  ></td>

                  <td style="padding: 16px 18px;">
                    <p
                      style="
                        margin: 0 0 5px;
                        color: #71717a;
                        font-size: 11px;
                        font-weight: 700;
                        letter-spacing: 1px;
                      "
                    >
                      NAME
                    </p>

                    <p
                      style="
                        margin: 0;
                        color: #ffffff;
                        font-size: 15px;
                        line-height: 22px;
                        font-weight: 600;
                      "
                    >
                      ${name}
                    </p>
                  </td>
                </tr>
              </table>


              <!-- EMAIL CARD -->
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  margin-bottom: 12px;
                  background-color: #18181b;
                  border: 1px solid #27272a;
                  border-radius: 12px;
                "
              >
                <tr>
                  <td
                    style="
                      width: 4px;
                      background-color: #22c55e;
                    "
                  ></td>

                  <td style="padding: 16px 18px;">
                    <p
                      style="
                        margin: 0 0 5px;
                        color: #71717a;
                        font-size: 11px;
                        font-weight: 700;
                        letter-spacing: 1px;
                      "
                    >
                      EMAIL ADDRESS
                    </p>

                    <a
                      href="mailto:${email}"
                      style="
                        color: #86efac;
                        font-size: 15px;
                        line-height: 22px;
                        text-decoration: none;
                        font-weight: 600;
                      "
                    >
                      ${email}
                    </a>
                  </td>
                </tr>
              </table>


              <!-- SUBJECT CARD -->
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  margin-bottom: 22px;
                  background-color: #18181b;
                  border: 1px solid #27272a;
                  border-radius: 12px;
                "
              >
                <tr>
                  <td
                    style="
                      width: 4px;
                      background-color: #eab308;
                    "
                  ></td>

                  <td style="padding: 16px 18px;">
                    <p
                      style="
                        margin: 0 0 5px;
                        color: #71717a;
                        font-size: 11px;
                        font-weight: 700;
                        letter-spacing: 1px;
                      "
                    >
                      SUBJECT
                    </p>

                    <p
                      style="
                        margin: 0;
                        color: #ffffff;
                        font-size: 15px;
                        line-height: 22px;
                        font-weight: 600;
                      "
                    >
                      ${subject}
                    </p>
                  </td>
                </tr>
              </table>


              <!-- MESSAGE HEADING -->
              <p
                style="
                  margin: 0 0 10px;
                  color: #71717a;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1px;
                "
              >
                MESSAGE
              </p>


              <!-- MESSAGE BOX -->
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  background-color: #18181b;
                  border: 1px solid #27272a;
                  border-radius: 12px;
                "
              >
                <tr>
                  <td
                    style="
                      padding: 20px;
                      color: #d4d4d8;
                      font-size: 15px;
                      line-height: 26px;
                      word-break: break-word;
                    "
                  >
                    ${message}
                  </td>
                </tr>
              </table>


              <!-- REPLY BUTTON -->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                align="center"
                style="
                  margin-top: 28px;
                  margin-bottom: 26px;
                "
              >
                <tr>
                  <td
                    align="center"
                    style="
                      border-radius: 10px;
                      background-color: #fe6652;
                    "
                  >
                    <a
                      href="mailto:${email}?subject=${encodeURIComponent(
                        `Re: ${data.subject}`,
                      )}"
                      style="
                        display: inline-block;
                        padding: 13px 24px;
                        color: #ffffff;
                        font-size: 14px;
                        font-weight: 700;
                        text-decoration: none;
                      "
                    >
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>


              <!-- DIVIDER -->
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td
                    style="
                      border-top: 1px solid #27272a;
                      padding-top: 20px;
                    "
                  >

                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      <tr>
                        <td
                          style="
                            color: #71717a;
                            font-size: 12px;
                            line-height: 18px;
                          "
                        >
                          ${currentDate}
                        </td>

                        <td
                          align="right"
                          style="
                            color: #71717a;
                            font-size: 12px;
                            line-height: 18px;
                          "
                        >
                          Portfolio Contact Form
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

            </td>
          </tr>


          <!-- FOOTER -->
          <tr>
            <td
              align="center"
              style="
                padding: 24px 30px;
                background-color: #0d0d0f;
                border-top: 1px solid #27272a;
              "
            >
              <p
                style="
                  margin: 0;
                  color: #71717a;
                  font-size: 12px;
                  line-height: 20px;
                "
              >
                This notification was generated from
                <strong style="color: #a1a1aa;">
                  Karan Kumar Bind's Portfolio
                </strong>.
              </p>

              <p
                style="
                  margin: 5px 0 0;
                  color: #52525b;
                  font-size: 11px;
                  line-height: 18px;
                "
              >
                You can reply directly to this email to contact ${name}.
              </p>

              <p
                style="
                  margin: 14px 0 0;
                  color: #3f3f46;
                  font-size: 11px;
                "
              >
                ◆ &nbsp; Built with passion & code &nbsp; ◆
              </p>
            </td>
          </tr>

        </table>

        <!-- OUTSIDE FOOTER -->
        <p
          style="
            margin: 18px 0 0;
            color: #52525b;
            font-size: 11px;
            line-height: 18px;
          "
        >
          Automated notification · Please do not share this email publicly
        </p>

      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

// Plain Text Template for Fallback
const generatePlainText = (data: ContactFormData) => {
  const { name, email, subject, message } = data;
  return `
╔═══════════════════════════════════════╗
║     📬 NEW CONTACT FORM MESSAGE      ║
╚═══════════════════════════════════════╝

👤 Name: ${name}
📧 Email: ${email}
📋 Subject: ${subject}
📅 Time: ${new Date().toLocaleString()}

─────────────────────────────────────────
💬 MESSAGE:
─────────────────────────────────────────

${message}

─────────────────────────────────────────

📱 Sent from Karan Kumar Bind Portfolio
   Reply to: ${email}

╔═══════════════════════════════════════╗
║  ✨ Thank you for using the contact   ║
║     form on your portfolio website!   ║
╚═══════════════════════════════════════╝
  `;
};

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          // Parse request body
          const body = (await request.json()) as ContactFormData;

          // Validate with Zod
          const validationResult = contactSchema.safeParse(body);
          
          if (!validationResult.success) {
            const errors = validationResult.error.errors.map(err => ({
              field: err.path.join('.'),
              message: err.message
            }));

            return Response.json(
              {
                success: false,
                message: "Validation failed",
                errors: errors,
              },
              {
                status: 400,
              },
            );
          }

          const { name, email, subject, message } = validationResult.data;

          // Check environment variables
          const gmailUser = process.env.GMAIL_USER;
          const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
          const adminEmail = process.env.ADMIN_EMAIL;

          if (!gmailUser || !gmailAppPassword || !adminEmail) {
            console.error("Missing Gmail environment variables:", {
              hasGmailUser: !!gmailUser,
              hasGmailAppPassword: !!gmailAppPassword,
              hasAdminEmail: !!adminEmail,
            });

            return Response.json(
              {
                success: false,
                message: "Server email configuration is missing. Please contact site administrator.",
                error: "EMAIL_CONFIG_MISSING",
              },
              {
                status: 500,
              },
            );
          }

          // Create transporter
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: gmailUser,
              pass: gmailAppPassword,
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

          // Generate HTML email
          const htmlContent = generateEmailHTML({ name, email, subject, message });
          const plainTextContent = generatePlainText({ name, email, subject, message });

          // Send email
          const mailOptions = {
            from: `"Karan Kumar Bind Portfolio" <${gmailUser}>`,
            to: adminEmail,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: plainTextContent,
            html: htmlContent,
            headers: {
              'X-Priority': '1',
              'X-MSMail-Priority': 'High',
            },
          };

          const info = await transporter.sendMail(mailOptions);

          console.log("Email sent successfully:", {
            messageId: info.messageId,
            to: adminEmail,
            from: email,
            subject: subject,
          });

          // Send auto-reply to the user
            const autoReplyOptions = {
              from: `"Karan Kumar Bind" <${gmailUser}>`,
              to: email,
              subject: "Thank you for reaching out! 🙌",

              text: `
            Hi ${name},

            Thank you for reaching out through my portfolio.

            I have successfully received your message regarding:

            Subject: ${subject}

            I appreciate you taking the time to contact me. I'll review your message and respond as soon as possible, usually within 24–48 hours.

            Best regards,
            Karan Kumar Bind
            Java Developer | Computer Science Student
              `,

              html: `
            <!doctype html>
            <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />

              <meta name="color-scheme" content="dark" />
              <meta name="supported-color-schemes" content="dark" />

              <title>Thank You for Reaching Out</title>
            </head>

            <body
              style="
                margin: 0;
                padding: 0;
                background-color: #09090b;
                font-family: Arial, Helvetica, sans-serif;
                color: #f4f4f5;
              "
            >

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  width: 100%;
                  background-color: #09090b;
                "
              >
                <tr>
                  <td
                    align="center"
                    style="
                      padding: 40px 16px;
                    "
                  >

                    <!-- MAIN CONTAINER -->

                    <table
                      role="presentation"
                      width="600"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      style="
                        width: 100%;
                        max-width: 600px;
                        background-color: #111113;
                        border: 1px solid #27272a;
                        border-radius: 20px;
                        overflow: hidden;
                      "
                    >

                      <!-- TOP ACCENT -->

                      <tr>
                        <td
                          style="
                            height: 4px;
                            background-color: #fe6652;
                            font-size: 0;
                            line-height: 0;
                          "
                        >
                          &nbsp;
                        </td>
                      </tr>


                      <!-- HEADER -->

                      <tr>
                        <td
                          align="center"
                          style="
                            padding: 40px 32px 34px;
                            background-color: #151517;
                            border-bottom: 1px solid #27272a;
                          "
                        >

                          <!-- ICON -->

                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                          >
                            <tr>
                              <td
                                align="center"
                                valign="middle"
                                style="
                                  width: 62px;
                                  height: 62px;
                                  border-radius: 16px;
                                  background-color: #fe6652;
                                  font-size: 28px;
                                "
                              >
                                🙌
                              </td>
                            </tr>
                          </table>


                          <h1
                            style="
                              margin: 20px 0 8px;
                              color: #ffffff;
                              font-size: 27px;
                              line-height: 35px;
                              font-weight: 700;
                            "
                          >
                            Thank You for Reaching Out!
                          </h1>


                          <p
                            style="
                              margin: 0;
                              color: #a1a1aa;
                              font-size: 14px;
                              line-height: 22px;
                            "
                          >
                            Your message has been successfully received.
                          </p>


                          <!-- STATUS BADGE -->

                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            style="
                              margin-top: 18px;
                            "
                          >
                            <tr>
                              <td
                                style="
                                  padding: 7px 15px;
                                  background-color: #13271b;
                                  border: 1px solid #225c36;
                                  border-radius: 50px;
                                  color: #86efac;
                                  font-size: 12px;
                                  font-weight: 600;
                                "
                              >
                                ● &nbsp; MESSAGE RECEIVED
                              </td>
                            </tr>
                          </table>

                        </td>
                      </tr>


                      <!-- CONTENT -->

                      <tr>
                        <td
                          style="
                            padding: 34px 32px;
                          "
                        >

                          <!-- GREETING -->

                          <p
                            style="
                              margin: 0 0 18px;
                              color: #f4f4f5;
                              font-size: 16px;
                              line-height: 26px;
                            "
                          >
                            Hi
                            <strong style="color: #fe6652;">
                              ${name}
                            </strong>
                            👋
                          </p>


                          <p
                            style="
                              margin: 0 0 16px;
                              color: #d4d4d8;
                              font-size: 15px;
                              line-height: 26px;
                            "
                          >
                            Thank you for reaching out through my portfolio.
                            I've successfully received your message and appreciate
                            you taking the time to contact me.
                          </p>


                          <p
                            style="
                              margin: 0 0 24px;
                              color: #d4d4d8;
                              font-size: 15px;
                              line-height: 26px;
                            "
                          >
                            I'll review your message carefully and get back to you
                            as soon as possible.
                          </p>


                          <!-- SUBMISSION SUMMARY -->

                          <table
                            role="presentation"
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            style="
                              background-color: #18181b;
                              border: 1px solid #27272a;
                              border-radius: 14px;
                              overflow: hidden;
                            "
                          >

                            <tr>
                              <td
                                style="
                                  padding: 16px 20px;
                                  border-bottom: 1px solid #27272a;
                                "
                              >
                                <p
                                  style="
                                    margin: 0;
                                    color: #ffffff;
                                    font-size: 14px;
                                    line-height: 22px;
                                    font-weight: 700;
                                  "
                                >
                                  📋 Your Submission Summary
                                </p>
                              </td>
                            </tr>


                            <tr>
                              <td
                                style="
                                  padding: 18px 20px;
                                "
                              >

                                <p
                                  style="
                                    margin: 0 0 6px;
                                    color: #71717a;
                                    font-size: 11px;
                                    line-height: 18px;
                                    font-weight: 700;
                                    letter-spacing: 1px;
                                  "
                                >
                                  SUBJECT
                                </p>


                                <p
                                  style="
                                    margin: 0;
                                    color: #f4f4f5;
                                    font-size: 15px;
                                    line-height: 24px;
                                    font-weight: 600;
                                  "
                                >
                                  ${subject}
                                </p>

                              </td>
                            </tr>

                          </table>


                          <!-- RESPONSE TIME -->

                          <table
                            role="presentation"
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            style="
                              margin-top: 18px;
                              background-color: #281815;
                              border: 1px solid #57312d;
                              border-radius: 14px;
                            "
                          >
                            <tr>

                              <td
                                valign="top"
                                style="
                                  width: 36px;
                                  padding: 18px 0 18px 18px;
                                  font-size: 22px;
                                "
                              >
                                ⏱️
                              </td>


                              <td
                                style="
                                  padding: 18px;
                                "
                              >

                                <p
                                  style="
                                    margin: 0 0 4px;
                                    color: #ff9a8c;
                                    font-size: 14px;
                                    line-height: 21px;
                                    font-weight: 700;
                                  "
                                >
                                  Expected Response Time
                                </p>


                                <p
                                  style="
                                    margin: 0;
                                    color: #d4d4d8;
                                    font-size: 13px;
                                    line-height: 21px;
                                  "
                                >
                                  I usually respond within
                                  <strong style="color: #ffffff;">
                                    24–48 hours
                                  </strong>.
                                </p>

                              </td>

                            </tr>
                          </table>


                          <!-- PERSONAL MESSAGE -->

                          <p
                            style="
                              margin: 26px 0 0;
                              color: #d4d4d8;
                              font-size: 15px;
                              line-height: 26px;
                            "
                          >
                            In the meantime, thank you again for your interest,
                            opportunity, or collaboration idea. I look forward to
                            connecting with you.
                          </p>


                          <!-- SIGNATURE -->

                          <table
                            role="presentation"
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            style="
                              margin-top: 30px;
                              border-top: 1px solid #27272a;
                            "
                          >
                            <tr>
                              <td
                                style="
                                  padding-top: 24px;
                                "
                              >

                                <p
                                  style="
                                    margin: 0 0 4px;
                                    color: #a1a1aa;
                                    font-size: 13px;
                                    line-height: 20px;
                                  "
                                >
                                  Best regards,
                                </p>


                                <p
                                  style="
                                    margin: 0;
                                    color: #ffffff;
                                    font-size: 17px;
                                    line-height: 25px;
                                    font-weight: 700;
                                  "
                                >
                                  Karan Kumar Bind
                                </p>


                                <p
                                  style="
                                    margin: 4px 0 0;
                                    color: #fe6652;
                                    font-size: 13px;
                                    line-height: 20px;
                                    font-weight: 600;
                                  "
                                >
                                  Java Developer
                                </p>


                                <p
                                  style="
                                    margin: 2px 0 0;
                                    color: #71717a;
                                    font-size: 12px;
                                    line-height: 19px;
                                  "
                                >
                                  Computer Science Student
                                </p>

                              </td>
                            </tr>
                          </table>

                        </td>
                      </tr>


                      <!-- FOOTER -->

                      <tr>
                        <td
                          align="center"
                          style="
                            padding: 24px 30px;
                            background-color: #0d0d0f;
                            border-top: 1px solid #27272a;
                          "
                        >

                          <p
                            style="
                              margin: 0;
                              color: #71717a;
                              font-size: 12px;
                              line-height: 20px;
                            "
                          >
                            This is an automated confirmation from
                            <strong style="color: #a1a1aa;">
                              Karan Kumar Bind's Portfolio
                            </strong>.
                          </p>


                          <p
                            style="
                              margin: 5px 0 0;
                              color: #52525b;
                              font-size: 11px;
                              line-height: 18px;
                            "
                          >
                            Your message was successfully delivered.
                          </p>


                          <p
                            style="
                              margin: 14px 0 0;
                              color: #3f3f46;
                              font-size: 11px;
                              line-height: 18px;
                            "
                          >
                            ◆ &nbsp; Built with passion & code &nbsp; ◆
                          </p>

                        </td>
                      </tr>

                    </table>


                    <!-- OUTSIDE FOOTER -->

                    <p
                      style="
                        margin: 18px 0 0;
                        color: #52525b;
                        font-size: 11px;
                        line-height: 18px;
                      "
                    >
                      Automated confirmation email · No action is required
                    </p>

                  </td>
                </tr>
              </table>

            </body>
            </html>
              `,
            };

          // Send auto-reply (don't wait for it to complete)
          transporter.sendMail(autoReplyOptions).catch((error) => {
            console.warn("Auto-reply email failed:", error.message);
          });

          return Response.json({
            success: true,
            message: "Message sent successfully! I'll get back to you soon. 🙌",
            data: {
              messageId: info.messageId,
              to: adminEmail,
            },
          });
        } catch (error) {
          console.error("Contact form error:", error);

          // Handle specific errors
          if (error instanceof z.ZodError) {
            return Response.json(
              {
                success: false,
                message: "Validation failed",
                errors: error.errors.map(err => ({
                  field: err.path.join('.'),
                  message: err.message,
                })),
              },
              {
                status: 400,
              },
            );
          }

          if (error instanceof Error && error.message.includes('Invalid login')) {
            return Response.json(
              {
                success: false,
                message: "Email authentication failed. Please check server configuration.",
                error: "AUTH_FAILED",
              },
              {
                status: 500,
              },
            );
          }

          return Response.json(
            {
              success: false,
              message: "Unable to send message. Please try again later. 😞",
              error: "SERVER_ERROR",
            },
            {
              status: 500,
            },
          );
        }
      },
    },
  },
});