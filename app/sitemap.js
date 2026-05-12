export default function sitemap() {
  const baseUrl = "https://www.stavino.sk";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
