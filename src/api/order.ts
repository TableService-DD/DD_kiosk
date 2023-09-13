import axios from 'axios';
import { BASE_URL } from '.';
import apiInstance from './apiInstance';

export interface OrderItem {
  store_code: string;
  table_number: string;
  product_id: string;
  product_price: number;
  product_count: number;
  product_option: { [key: string]: number } | null;
  product_status: boolean;
}

export async function getOrders(): Promise<OrderItem[] | boolean> {
  try {
    const response = await apiInstance.get(`${BASE_URL}/order/list`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function addOrders(item: OrderItem): Promise<boolean> {
  try {
    const response = await apiInstance.post(`${BASE_URL}/cart/add`, item);
    console.log(response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function deleteOrders(item: OrderItem): Promise<boolean> {
  try {
    const response = await apiInstance.delete(`${BASE_URL}/cart/delete`, {
      params: {
        product_id: item.product_id,
      },
    });
    console.log(response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
