
// earlier code from 
// =======================================================


// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { name, email, subject, message } = await req.json();

//     const { error } = await resend.emails.send({
//       from: "Portfolio Contact <onboarding@resend.dev>", // we'll change this later
//       to: process.env.CONTACT_EMAIL!,
//       replyTo: email,
//       subject: `Portfolio: ${subject}`,
//       text: `
// Name: ${name}

// Email: ${email}

// Subject: ${subject}

// Message:
// ${message}
//       `,
//     });

//     if (error) {
//       return NextResponse.json(
//         { success: false, error },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ success: true });
//   } catch {
//     return NextResponse.json(
//       { success: false },
//       { status: 500 }
//     );
//   }
// }

// ===================================================

// New AI code

// ======================
// Code from AI for Contact Form
// Next.js API Route
// Receives form data and sends email using Resend
// ======================

import { NextResponse } from "next/server";
import { Resend } from "resend";

// ======================
// Code from AI for Contact Form
// Initialize Resend using API Key
// ======================

const resend = new Resend(process.env.RESEND_API_KEY);

// ======================
// Code from AI for Contact Form
// Handle POST request
// ======================

export async function POST(request: Request) {
  try {
    // ======================
    // Code from AI for Contact Form
    // Read JSON sent from the frontend
    // ======================

    const { name, email, subject, message } = await request.json();

    // ======================
    // Code from AI for Contact Form
    // Basic validation
    // (We'll replace this with Zod later)
    // ======================

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // ======================
    // Code from AI for Contact Form
    // Send email using Resend
    // ======================

    const { error } = await resend.emails.send({
      from: "Portfolio Contact Sana Ullah <contact@devsanaa.com>",

      to: process.env.CONTACT_EMAIL!,

      replyTo: email,

      subject: `Portfolio Contact: ${subject}`,

      text: `
New Portfolio Contact

Name:
${name}

Email:
${email}

Subject:
${subject}

Message:
${message}
`,
    });

    // ======================
    // Code from AI for Contact Form
    // Handle Resend errors
    // ======================

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        { status: 500 }
      );
    }

    // ======================
    // Code from AI for Contact Form
    // Success response
    // ======================

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}