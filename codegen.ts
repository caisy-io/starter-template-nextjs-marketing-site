import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env.local" });

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [`https://cloud.caisy.io/api/v3/e/${process.env.CAISY_PROJECT_ID}/graphql` ||
      ""]: {
        headers: {
          "x-caisy-apikey": `${process.env.CAISY_API_KEY}`,
        },
      },
    },
  ],
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
  generates: {
    "src/utils/types_gen.ts": {
      documents: [
        "src/services/graphql/**/*.graphql",
        "src/services/graphql/fragments/**/*.ts",
        "src/services/graphql/queries/**/*.ts",
      ],
      plugins: ["typescript", "typescript-operations"],
      config: {
        avoidOptionals: false,
        nonOptionalTypename: true,
        typesPrefix: "IGen",
      },
    },
  },
};

export default config;
