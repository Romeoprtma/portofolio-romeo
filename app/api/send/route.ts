import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { fullName, email, message } = await request.json();

    const data = await resend.emails.send({

      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['romeomuliap@gmail.com'],
      subject: `New Message from ${fullName} (Portfolio)`,
      replyTo: email,
      html: `
        <div style="font-family: 'Space Grotesk', sans-serif; padding: 24px; border: 3px solid #000; border-radius: 24px; background-color: #FFF6DE;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">Pesan Baru Masuk! 🚀</h2>
          <p style="margin-top: 20px;"><strong>Pengirim:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background: #8BDFDD; padding: 15px; border: 2px solid #000; border-radius: 12px; margin-top: 20px;">
            <p style="margin: 0;"><strong>Isi Pesan:</strong></p>
            <p style="margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 30px;">Sent via Portfolio Website Engine</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}