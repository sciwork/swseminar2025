import Container from "@/components/Container";

type Props = {
  children: React.ReactNode;
};

const Article = ({ children }: Props) => {
  return (
    <Container
      as="article"
      className="tw-prose tw-mb-12 tw-mt-2 tw-max-w-none prose-headings:tw-font-yk prose-headings:tw-font-normal prose-h1:tw-text-center prose-h1:tw-text-3xl prose-h1:tw-underline prose-h1:tw-decoration-rose-400 prose-h1:tw-decoration-2 prose-h1:tw-underline-offset-4 tablet:tw-mb-32 tablet:tw-mt-10 tablet:prose-h1:tw-tracking-widest"
    >
      {children}
    </Container>
  );
};

export default Article;
