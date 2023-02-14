import client from "../database/client";
import { CustomError } from "../types/custom.error";

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
  async getImage(id: string) {
    try {
      const image = await client.image.findUnique({
        where: {
          uuid: id,
        },
      });
      return image?.url;
    } catch (error) {
      return new CustomError("Error getting image");
    }
  }
}

export default new ImageService();
