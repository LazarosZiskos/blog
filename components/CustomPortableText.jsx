import { PortableText } from "@portabletext/react";

const CustomPortableText = ({ value }) => {
  const components = {
    types: {
      image: ({ value }) => (
        <img
          src={value.asset.url}
          alt={value.alt || "Sanity Image"}
          className="rounded-lg shadow-lg my-4"
        />
      ),
    },
    block: {
      h2: ({ children }) => (
        <h2 className="text-3xl font-semibold py-5">{children}</h2>
      ),
      normal: ({ children }) => (
        <p className="text-gray-800 dark:text-gray-400">{children}</p>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => (
        <em className="italic text-blue-500">{children}</em>
      ),
      link: ({ value, children }) => (
        <a
          href={value.href}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return <PortableText value={value} components={components} />;
};

export default CustomPortableText;
