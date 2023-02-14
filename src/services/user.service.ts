import { User } from "@prisma/client";

import client from "../database/client";

class UserService {
  createUser(user: User) {
    return client.user.create({ data: user });
  }
  findUserByEmail(email: string) {
    return client.user.findFirst({ where: { email } });
  }
}

export default new UserService();