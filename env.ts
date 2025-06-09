import { z } from "zod";

const envSchema = z.object({
  SHOPIFY_STORE_DOMAIN: z.string(),
  SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string(),
  SHOPIFY_PRIVATE_API_KEY: z.string(),
});

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
