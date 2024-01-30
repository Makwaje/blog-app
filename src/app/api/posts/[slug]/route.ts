import { prisma } from "@/utils/connect";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req: Request, { params }: { params: Params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify({ post, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong", status: 500 }),
    );
  }
};
