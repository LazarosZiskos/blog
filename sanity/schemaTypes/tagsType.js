import { defineField, defineType } from "sanity";

export const tagsType = defineType({
  name: "tags",
  title: "Tags",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
