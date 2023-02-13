import { Request, Response } from "express";
import multer from "multer";





class ImagesController {
  getImage(req: Request, res: Response) {

    //to be defined
    res.send("hello");
  }
  uploadImage(req: Request, res: Response) {
    console.log(req.file);
    console.log(req.file?.originalname);
    console.log(req.file?.buffer,toString());
    
    
    //to be defined
    res.send("hello");
  }
}

export default new ImagesController();
