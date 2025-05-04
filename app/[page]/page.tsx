import { existsSync } from "fs";
import { Metadata, ResolvingMetadata } from "next";
import routes from "@/configurations/routes";
import Article from "@/components/Article";
import Content from "@/components/Content";

export function generateStaticParams() {
  return routes
    .filter((route) => !route.disabled && route.path !== "/")
    .filter((route) => {
      return !existsSync(`app/${route.path.substring(1).toLowerCase()}/page.tsx`);
    })
    .map((route) => ({
      page: route.path.substring(1).toLowerCase(),
    }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ page: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const pageName = (await params).page;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: routes.find((route) => route.path.substring(1).toLowerCase() === pageName)?.name,
    openGraph: {
      images: [...previousImages],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ page: string }> }) => {
  const pageName = (await params).page;

  return (
    <Article>
      <Content name={pageName} />
    </Article>
  );
};

export default Page;
