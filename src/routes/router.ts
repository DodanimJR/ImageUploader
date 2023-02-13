import { Application } from "express";
import imagesRouter from "./images";
export default function router(app: Application): void {
  /**
   * Every source are specifed here
   */
  app.use("/images", imagesRouter);
}
