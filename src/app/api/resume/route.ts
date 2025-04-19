import { NextRequest, NextResponse } from "next/server";
import formidable, { IncomingForm } from "formidable";
import { promisify } from "util";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const form = new IncomingForm({ keepExtensions: true });

  const parseForm = promisify(form.parse.bind(form));

  try {
    const { fields, files } = (await parseForm(req as any)) as unknown as {
      fields: formidable.Fields;
      files: formidable.Files;
    };

    console.log("FIELDS:", fields);
    console.log("FILES:", files);

    return NextResponse.json({ message: "Received!" }, { status: 200 });
  } catch (err) {
    console.error("Form parse error:", err);
    return NextResponse.json(
      { message: "Error parsing form data" },
      { status: 500 }
    );
  }
}
