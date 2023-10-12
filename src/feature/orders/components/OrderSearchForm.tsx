import { useForm } from "react-hook-form";
import { Input, Select } from "@/shared/components";

export const OrderSearchForm = () => {
  const defaultValues = {
    typeDocument: "",
    document: "",
    orderNumber: "",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card position-absolute mx-4 p-4  border-success "
        style={{ top: "20%", right: "5%", left: "5%", borderRadius: "1.2rem" }}
      >
        <h5 className="text-center"></h5>
        <Input
          className="form-control"
          classNameContainer="form-group"
          control={control}
          name="orderNumber"
          type="number"
          label="Código pedido"
          rules={{ required: "El código pedidoes obligatorio" }}
        />
        <Select
          className="form-control"
          classNameContainer="form-group"
          control={control}
          options={[
            { label: "Cedula de ciudadania", value: "C.C" },
            { label: "Pasaportes", value: "P.i" },
          ]}
          name="document"
          type="number"
          label="Tipo de documento"
          rules={{ required: "El documento es obligatorio" }}
        />
        <Input
          className="form-control"
          classNameContainer="form-group"
          control={control}
          name="document"
          type="number"
          label="Documento"
          rules={{ required: "El documento es obligatorio" }}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
