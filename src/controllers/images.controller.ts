import { Request, Response } from "express";
import { BaseController } from "../types/base.controller";
import imageService from "../services/image.service";
import { HttpError } from "../types/custom.error";




class ImagesController extends BaseController {
  async getImage(req: Request | any, res: Response) {
    try {
      const id = req.params.id;
    
      if (req.user!=null) {
        const result = await imageService.getImage(id);
        if (result===undefined) {
          throw new HttpError("Image not found", 404);
          
          
        }
        console.log(result);
        
        this.responseHandler(res, result, 200);
      }else{
        this.responseHandler(res, {message:"This image doesn't belong to you"}, 401);
      }
    } catch (error) {
      this.errorHandler(res, error);
    }
  }
  async uploadImage(req: Request | any, res: Response) {
    try {
      if (req.user!=null) {

        const result =await imageService.uploadImage(req.file?.filename.split(".")[0],req.file?.path,req.user.id);
        this.responseHandler(res, {message:"Image uploaded"}, 200);
      }
    } catch (error) {
      this.responseHandler(res, error, 500);
    }

  }
}

export default new ImagesController();
