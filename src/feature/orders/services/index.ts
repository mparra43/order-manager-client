



import { client } from '@/utils/request';
import { toast } from 'react-toastify'
import { GET_ORDER } from './queries';
import {  FiltersOrderApi, OrderResponse } from '../types';


async function getOrder({orderId, document, documentType}:FiltersOrderApi):Promise<OrderResponse|undefined> {
  
  try {
    return await client.request(GET_ORDER, {orderId, document, documentType });
  } catch (error:any) {
    if(error.response.status === 200){
      toast.error('No se encontró la orden')
    }else {
      toast.error('Ocurrió un error, inténtalo de nuevo')
      console.error('service getOrdert: ', error);

    }
  }
}


export const orderApi = {
  getOrder
};
