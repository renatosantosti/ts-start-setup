import * as express from "express";
import { Request, Response } from "express";

const port = 5015;
const defaultMessage =
  "start setup ts with: husty, lint-staged, prettier, eslint and jest";
const app = express();

// Configure default route
app.use("/", (req: Request, res: Response) => {
  res.send(defaultMessage);
});

app.listen(port, () => {
  console.log(`🚀 Running on http://localhost:${port}`);

  console.groupCollapsed("Default-Message");
  console.log(defaultMessage);
  console.groupEnd();
});
