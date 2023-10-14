import { useForm } from 'react-hook-form';
import { Button,Input, Select } from '@/shared/components';
import { documentsTypes } from '../constants';
import { FiltersOrder } from '../types';


interface OrderSearchFormProps {
  service: (filters: FiltersOrder) => void;
}


export const OrderSearchForm = ({ service }: OrderSearchFormProps) => {
  const defaultValues = {
    documentType: '',
    document: '',
    orderId: '',
  };
  const {
    control,
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    service(data)
    reset();
  };


  return (
    <div >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' position-absolute mx-4 p-4 opacity-25 '
        style={{ top: '25%', right: '5%', left: '5%', borderRadius: '2rem' }}
      >
        <h2 className='text-center text-white fw-bolder text-shadow'>Consulta tu orden</h2>
        <Input
          className='form-control'
          classNameContainer='form-group'
          control={control}

          name='orderId'
          type='text'
          label='Código pedido'
          rules={{ required: 'El código del pedido es obligatorio' }}
        />
        <Select
          className='form-control'
          classNameContainer='form-group'
          control={control}
          options={documentsTypes}
          name='documentType'
          label='Tipo de documento'
          rules={{ required: 'El tipo de documento es obligatorio' }}
        />
        <Input
          className='form-control'
          classNameContainer='form-group'
          control={control}
          name='document'
          type='number'
          label='Documento'
          rules={{ required: 'El documento es obligatorio' }}
        />
          <Button className='btn btn-primary mt-4 ' label='Consultar orden' type='submit' />
      </form>
    </div>
  );
};
