import React from "react";
import { $host } from ".";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class PhotoService {
  public async getOriginalPhoto(photoId: string) {
    try {
      const token = cookies.get("jwt_auth");
      const data = await $host.get(`/api/albums/photos/${photoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (e) {
      return false;
    }
  }
}

export default new PhotoService();
