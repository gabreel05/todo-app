import React, { useRef, useEffect, useState } from 'react';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import api from '../../services/api';

interface FormData {
  title: string;
  description: string;
}

interface ErrorInterface {
  [error: string]: string
}

const TodoForm: React.FC = () => {
  const [data, setData] = useState({});

  const formRef = useRef<FormHandles>(null);
  
  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string()
          .min(3, 'Mínino de 3 caracteres')
          .required('O título é obrigatório'),
        description: Yup.string()
          .min(5, 'Mínimo de 5 caracteres')
          .required('A descrição é obrigatória')
      });
  
      await schema.validate(data, {
        abortEarly: false
      })
      console.log(data);

      reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages: ErrorInterface = {};
        error.inner.forEach(error => {
          errorMessages[error.path] = error.message
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  };
  
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="title" />
      <Input name="description" />

      <Button variant="contained" color="secondary" type="submit">Enviar</Button>
    </Form>
  );
}

export default TodoForm;
