import type { AxiosError } from "axios";
import axios from "axios";
import { createMutation } from "react-query-kit";

type Variables = {
  id: number,
  itemId: number,
  itemName: string,
  quantity: number,
  eventId: number
};
type Response = { statuscode: number };

export const addEventItems = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) => {
    const response = await axios.post(
      "http://ec2-35-78-87-126.ap-northeast-1.compute.amazonaws.com:8080/event/addeventitems",
      {
        id: variables.id,
        itemId: variables.itemId,
        itemName: variables.itemName,
        quantity: variables.quantity,
        eventId: variables.eventId
      }
    );
    console.log(response.data);
    return response.data;
  },
});