import { Request, Response } from "express";
import { BaseController } from "../types/base.controller";
import imageService from "../services/image.service";
import {isUuid} from "uuidv4";




class ImagesController extends BaseController {
  async getImage(req: Request | any, res: Response) {
    const id = req.params.id;
    
    if (req.user!=null) {
      const result = await imageService.getImage(id);
      console.log(result);
      
      this.responseHandler(res, result, 200);
    }else{
      this.responseHandler(res, {message:"This image doesn't belong to you"}, 401);
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
