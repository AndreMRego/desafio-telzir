import React, { useState, useEffect, useMemo } from 'react';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import phone from '~/assets/images/phone.jpg';

import Button from '~/components/Button';
import Card from '~/components/Card';
import CustomSelect from '~/components/CustomSelect';
import { planos, listPrice } from '~/constants';
import { formatPrice } from '~/utils/format';

import {
  BodyWrapper,
  Container,
  Column,
  CardContainer,
  CompareContainer,
  FormContainer,
  HeaderWrapper,
  ContentRight,
  SimulationWrapper,
  Row,
} from './styles';

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
export default function Home() {
  const [openSimulation, setOpenSimulation] = useState(false);
  const [finalPrice, setFinalPrice] = useState({});

  const namePlan = useMemo(
    () => finalPrice.plan > 0 && planos[finalPrice.plan - 1].title,
    [finalPrice.plan]
  );

  useEffect(() => {
    const element = document.getElementById('simulation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [openSimulation]);

  useEffect(() => {
    const element = document.getElementById('compare');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [finalPrice]);

  function handleSubmit({ origem, destino, minutes, plan }) {
    const planWithPrice = listPrice.find(
      obj => obj.origem === origem && obj.destino === destino
    );
    const price = planWithPrice ? planWithPrice.price : null;
    const overMinutes = minutes - planos[plan - 1].minutes;
    const resultWithPlan =
      typeof price === 'number'
        ? formatPrice(overMinutes > 0 ? overMinutes * (price + price * 0.1) : 0)
        : price;
    const resultNoPlan =
      typeof price === 'number' ? formatPrice(minutes * price) : price;

    setFinalPrice({
      origem,
      destino,
      minutes,
      plan,
      withPlan: resultWithPlan,
      noPlan: resultNoPlan,
    });
  }

  function handleSimulation() {
    setOpenSimulation(!openSimulation);
    setFinalPrice({});
  }

  return (
    <Container>
      <HeaderWrapper>
        <img src={phone} alt="Compare Planos" />
        <ContentRight>
          <h2>Conheça o FaleMais</h2>
          <span>
            Começe a falar mais, pagando menos. Com o plano FaleMais, você ganha
            minutos gratuitos para falar com quem desejar. Adquirindo um dos
            nossos planos, você tem mais:
          </span>
          <CardContainer>
            <Card background="#00d9b8">
              <span>Controle</span>
            </Card>
            <Card background="#00d9b8">
              <span>Minutos</span>
            </Card>
            <Card background="#00d9b8">
              <span>Transparência</span>
            </Card>
          </CardContainer>
        </ContentRight>
      </HeaderWrapper>
      <BodyWrapper>
        <h2>Nossos Planos</h2>

        <CardContainer>
          {planos.map(plano => (
            <Card key={plano.id} color="#f28305" height="200px">
              <h3>Plano {plano.title}</h3>
              <span>{plano.minutes} minutos</span>
              <Button
                data-testid={`plan${plano.id}`}
                type="button"
                onClick={handleSimulation}
              >
                Experimentar
              </Button>
            </Card>
          ))}
        </CardContainer>
      </BodyWrapper>

      {openSimulation && (
        <SimulationWrapper id="simulation">
          <h2>Simulação</h2>
          <FormContainer
            data-testid="form"
            schema={schema}
            onSubmit={handleSubmit}
          >
            <Row>
              <Column>
                <Input
                  label="DDD - Origem"
                  name="origem"
                  placeholder="Digite o DDD de origem"
                />
              </Column>
              <Column>
                <Input
                  label="DDD - Destino"
                  name="destino"
                  placeholder="Digite o DDD de destino"
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Input
                  label="Tempo da Ligação"
                  name="minutes"
                  placeholder="Tempo da ligação"
                />
              </Column>
              <Column>
                <CustomSelect
                  label="Planos FaleMais"
                  placeholder="Escolha um Plano"
                  name="plan"
                  options={planos}
                />
              </Column>
            </Row>

            <Button testid="submit" type="submit">
              Simular
            </Button>
          </FormContainer>
        </SimulationWrapper>
      )}
      {Object.keys(finalPrice).length > 0 && (
        <CompareContainer data-testid="compare" id="compare">
          <h3>Observe o resultado</h3>
          <Row>
            <Column>
              <h4>Origem</h4>
              <span>{finalPrice.origem}</span>
            </Column>
            <Column>
              <h4>Destino</h4>
              <span>{finalPrice.destino}</span>
            </Column>
            <Column>
              <h4>Tempo</h4>
              <span>{finalPrice.minutes}</span>
            </Column>
            <Column>
              <h4>Plano</h4>
              <span>{namePlan}</span>
            </Column>
            <Column>
              <h4>Com FaleMais</h4>
              <span>{finalPrice.withPlan || '-'}</span>
            </Column>
            <Column>
              <h4>Sem FaleMais</h4>
              <span>{finalPrice.noPlan || '-'}</span>
            </Column>
          </Row>
        </CompareContainer>
      )}
    </Container>
  );
}
