import React from "react";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import { $host } from ".";

export const cookies = new Cookies();

class Payment {
  public async requestPayment(albumID: string) {
    try {
      const token = cookies.get("jwt_auth");

      const response = await $host.post(
        "/api/payment",
        {
          successUrl: `https://photo-drop-front-client.vercel.app/success`,
          cancelUrl: `https://photo-drop-front-client.vercel.app/failed`,
          albumId: albumID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log({ response });
      return response.data;
    } catch (e) {
      return false;
    }
  }
}

export default new Payment();
