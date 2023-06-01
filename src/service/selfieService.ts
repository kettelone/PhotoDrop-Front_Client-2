import React from "react";
import { $host } from ".";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Selfie {
  public async signSelfie(filesName: string[]) {
    try {
      const token = cookies.get("jwt_auth");
      const { data } = await $host.post(
        "/api/user/selfie",
        { photos: filesName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data[0];
    } catch (e) {
      return false;
    }
  }
}

export default new Selfie();
