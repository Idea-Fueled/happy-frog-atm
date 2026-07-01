import { Resend } from "resend";
import { NextResponse } from "next/server";
import "dotenv/config"
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, dispensary, phone, email, address, license, notes } = body;

    const currentYear = new Date().getFullYear();
    const formattedNotes = notes ? notes.replace(/\n/g, '<br/>') : '<em>No notes provided by sender.</em>';

    // Load the logo from the public directory
    const logoPath = path.join(process.cwd(), 'public', 'assets', 'logo.png');
    const logoBuffer = fs.readFileSync(logoPath);

    const { data, error } = await resend.emails.send({
      // IMPORTANT: For free/testing accounts, Resend requires using 'onboarding@resend.dev'.
      // You cannot send from arbitrary domains (like gmail.com) until you verify ownership of that domain.
      from: 'onboarding@resend.dev',
      to: 'anirudhj545@gmail.com', // Must be the email address you signed up to Resend with
      subject: `New Lead Submission | Happy Frog ATM`,
      html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Happy Frog ATM Lead</title>
              </head>
              <body style="margin: 0; padding: 0; background-color: #F0F0E0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F0F0E0; padding: 30px 10px;">
                  <tr>
                    <td align="center">
                      <!-- Main Card -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #DCDCC8; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); overflow: hidden;">
                        
                        <!-- Header Banner -->
                        <tr>
                          <td style="background-color: #0F0F0A; padding: 24px 24px 16px 24px; text-align: center; border-bottom: 4px solid #708010;">
                            <!-- Embedded Logo Image -->
                            <img src="cid:logo" alt="Happy Frog ATM Logo" style="height: 50px; width: auto; max-width: 172px; object-fit: contain; display: block; margin: 0 auto 10px auto; border-radius: 4px;" />
                            <p style="margin: 4px 0 0 0; color: #8C9E1C; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">
                              New Placement Lead Received
                            </p>
                          </td>
                        </tr>

                        <!-- Content Area -->
                        <tr>
                          <td style="padding: 35px 30px;">
                            <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 18px; font-weight: 800; border-bottom: 2px solid #EDEFCB; padding-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                              Lead Details
                            </h2>

                            <!-- Details Table -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 25px;">
                              <tr>
                                <td width="35%" style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 13px; font-weight: 700; color: #5A6610; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                                <td width="65%" style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 15px; color: #000000; font-weight: 600;">${firstName} ${lastName}</td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 13px; font-weight: 700; color: #5A6610; text-transform: uppercase; letter-spacing: 0.5px;">Dispensary</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 15px; color: #404000; font-weight: 700;">${dispensary}</td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 13px; font-weight: 700; color: #5A6610; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 15px; color: #000000; font-weight: 600;"><a href="tel:${phone}" style="color: #708010; text-decoration: none;">${phone}</a></td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 13px; font-weight: 700; color: #5A6610; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 15px; color: #000000; font-weight: 600;"><a href="mailto:${email}" style="color: #708010; text-decoration: none;">${email}</a></td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 13px; font-weight: 700; color: #5A6610; text-transform: uppercase; letter-spacing: 0.5px;">Location</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 15px; color: #3A3A28;">${address}</td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 13px; font-weight: 700; color: #5A6610; text-transform: uppercase; letter-spacing: 0.5px;">License Status</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #F0F0E0; font-size: 13px; font-weight: 700; color: #A02000;">${license}</td>
                              </tr>
                            </table>

                            <!-- Notes Section -->
                            <h3 style="margin: 25px 0 10px 0; color: #000000; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">
                              Notes from Lead
                            </h3>
                            <div style="background-color: #F0F0E0; border-left: 4px solid #708010; padding: 15px 18px; border-radius: 4px; font-size: 14px; color: #3A3A28; line-height: 1.6; font-style: italic;">
                              ${formattedNotes}
                            </div>

                            <!-- Fast Action Callouts -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px;">
                              <tr>
                                <td style="text-align: center;">
                                  <a href="mailto:${email}?subject=Happy Frog ATM Placement — ${dispensary}" style="display: inline-block; background-color: #708010; color: #000000; font-size: 14px; font-weight: 700; text-decoration: none; padding: 12px 24px; border-radius: 4px; margin-right: 10px;">
                                    Reply via Email
                                  </a>
                                  <a href="tel:${phone}" style="display: inline-block; background-color: #0F0F0A; color: #F0F0E0; font-size: 14px; font-weight: 700; text-decoration: none; padding: 12px 24px; border-radius: 4px;">
                                    Call Lead
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Footer Area -->
                        <tr>
                          <td style="background-color: #0F0F0A; padding: 20px; text-align: center; font-size: 11px; color: #787866; border-top: 1px solid rgba(255, 255, 255, 0.05); line-height: 1.5;">
                            This is an automated lead notification sent from <a href="https://happyfrogatm.com" target="_blank" style="color: #8C9E1C; text-decoration: none; font-weight: 600;">Happy Frog ATM</a>.
                            <br/>
                            © ${currentYear} Happy Frog ATM. All rights reserved.
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
              </html>
            `,
      attachments: [
        {
          filename: 'logo.png',
          content: logoBuffer,
          contentId: 'logo'
        }
      ]
    });

    if (error) {
      console.error("Resend API error details:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error in contact API:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}