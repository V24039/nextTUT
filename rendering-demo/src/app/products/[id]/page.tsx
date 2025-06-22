// This stops the dynamic page generaions for page id not present in generateStaticParams
// export const dynamicParams = false;

// By default its true, allowing next to rendering pages dyanmically when not added in generateStaticParams
// export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <h1>
      Product {id} details, date {new Date().toLocaleTimeString()}
    </h1>
  );
}
