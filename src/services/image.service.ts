import client from "../database/client";
import { CustomError, HttpError } from "../types/custom.error";

class ImageService {
  getMessage() {
    return "Hello world";
  }
  async uploadImage(uuid:string,url:string,userId: number){
    try {
      return await client.image.create({
        data:{
          uuid:uuid,
          url:url,
          userId:userId
        }})
    } catch (error) {
      return new CustomError("Error saving image");
    }

  }
  async getImage(id: string, userId: number) {
    try {
      const image = await client.image.findUnique({
        where: {
          uuid: id,
        },
      });
      if (image?.userId === userId) {
        return image?.url;
      } else {
        return new HttpError("Image is not yours", 401);
      }
    } catch (error) {
      return new CustomError("Error getting image");
    }
  }
}

export default new ImageService();
