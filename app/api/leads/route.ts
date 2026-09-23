import { z } from "zod";

const schema = z.object({
  id: z.string().uuid(),
  service: z.enum([
    "AC & Cooling",
    "Heating",
    "Plumbing",
    "Water Heaters",
  ]),
  zip: z.string().regex(/^\d{5}$/),
  urgency: z.enum([
    "As soon as possible",
    "This week",
    "Just exploring",
  ]),
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().max(25),
  notes: z.string().max(1000),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  if (origin && origin !== new URL(request.url).origin) {
    return Response.json(
      { error: "Please submit from this website." },
      { status: 403 }
    );
  }

  let payload: unknown;

  try {
    const raw = await request.text();

    if (raw.length > 6000) {
      return Response.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }

    payload = JSON.parse(raw);
  } catch {
    return Response.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return Response.json(
      {
        error:
          "Check the required contact details, ZIP code, and demo consent.",
      },
      { status: 400 }
    );
  }

  const d = parsed.data;

  console.log("Demo estimate submitted", {
    id: d.id,
    service: d.service,
    zip: d.zip,
    urgency: d.urgency,
  });

  return Response.json(
    {
      id: d.id,
      saved: false,
      demo: true,
      message:
        "Demo request received. No contact information was stored.",
    },
    {
      status: 201,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}