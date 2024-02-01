import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    console.log("i work");

    return new NextResponse(JSON.stringify({ comments, status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong", status: 500 }),
    );
  }
};

// CREATE A COMMENT
export const POST = async (req: Request) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return new NextResponse(
      JSON.stringify({
        message: "There is no currently active session, please login/signup ",
        status: 401,
      }),
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify({ comment, status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong", status: 500 }),
    );
  }
};
