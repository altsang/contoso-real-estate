import type { Schema, Attribute } from "@strapi/strapi";

export interface SectionsHero extends Schema.Component {
  collectionName: "components_decoration_heroes";
  info: {
    name: "Hero";
    icon: "address-card";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: "components_shared_seos";
  info: {
    name: "Seo";
    icon: "allergies";
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "sections.hero": SectionsHero;
      "shared.seo": SharedSeo;
    }
  }
}
