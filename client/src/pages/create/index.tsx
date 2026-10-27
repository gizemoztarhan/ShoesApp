import type { FC } from "react";
import Form from "../../components/form";
import { useCreateShoe } from "../../services/shoe";
import Container from "../../components/form/container";

const Create: FC = () => {
  const { mutate, isPending } = useCreateShoe();

  return (
    <Container title="Ürün Ekle">
      <Form onSubmit={mutate} isPending={isPending} />
    </Container>
  );
};

export default Create;
