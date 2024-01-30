import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") as string);
  const cat = searchParams.get("cat") as string;

  const POST_PER_PAGE = 2;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong", status: 500 }),
    );
  }
};

// CREATE A POST
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
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify({ post, status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong", status: 500 }),
    );
  }
};
