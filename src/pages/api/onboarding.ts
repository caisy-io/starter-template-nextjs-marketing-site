import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.redirect(
    `https://app.caisy.io/app/project/home?project_id=${process.env.CAISY_PROJECT_ID}&verify_template_setup=true`
  );
}
