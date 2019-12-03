import React from 'react';
import { act, render, wait, fireEvent } from '@testing-library/react';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import Home from '~/pages/Home';

import CustomSelect from '~/components/CustomSelect';

describe('Form component', () => {
  window.HTMLElement.prototype.scrollIntoView = function() {};
  it('should render form elements', () => {
    const { getAllByText, queryByTestId, getByLabelText } = render(<Home />);
    fireEvent.click(getAllByText('Experimentar')[0]);

    expect(queryByTestId('form')).toContainElement(getByLabelText('origem'));
    expect(queryByTestId('form')).toContainElement(getByLabelText('destino'));
    expect(queryByTestId('form')).toContainElement(getByLabelText('minutes'));
    expect(queryByTestId('form')).toContainElement(getByLabelText('plan'));
  });

  it('should data to match schema', async () => {
    const submitMock = jest.fn();

    const schema = Yup.object().shape({
      origem: Yup.string()
        .required('DDD de Origem é obrigatório')
        .min(3, 'É necessário preencher o DDD com 3 digitos, iniciando com 0.')
        .max(3, 'É necessário preencher até 3 digitos'),
      destino: Yup.string()
        .required('DDD de Destino é obrigatório')
        .min(3, 'É necessário preencher o DDD com 3 digitos, iniciando com 0.')
        .max(3, 'É necessário preencher até 3 digitos'),
      minutes: Yup.number().typeError('O tempo da ligação é obrigatório.'),
      plan: Yup.number().typeError('O Plano é obrigatório'),
    });
    const { getByTestId } = render(
      <Form
        initialData={{
          origem: '011',
          destino: '016',
          minutes: 60,
          plan: 1,
        }}
        onSubmit={submitMock}
        schema={schema}
      >
        <Input name="origem" />
        <Input name="destino" />
        <Input name="minutes" />
        <CustomSelect name="plan" options={[{ id: 1, title: 'FaleMais 30' }]} />
        <button type="submit">Click</button>
      </Form>
    );

    act(() => {
      fireEvent.submit(getByTestId('form'));
    });
    await wait(() => {
      expect(submitMock).toHaveBeenCalledWith(
        { origem: '011', destino: '016', minutes: 60, plan: 1 },
        {
          resetForm: expect.any(Function),
        }
      );
    });
  });
});
