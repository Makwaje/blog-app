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

    return new NextResponse(JSON.stringify({ comments, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong", status: 500 }),
    );
  }
};
