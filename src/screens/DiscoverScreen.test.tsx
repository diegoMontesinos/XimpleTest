import { render } from '@testing-library/react-native';

import TestingWrapper from '../../jest/utils/TestingWrapper';

import Navigation from '../Navigation';

jest.useFakeTimers();

describe('Discover Screen', () => {
  it('render correctly', () => {
    const { getByText } = render(<Navigation initialRouteName="Discover" />, {
      wrapper: TestingWrapper,
    });

    expect(getByText('Descubre tu crédito')).toBeTruthy();
    expect(
      getByText(
        'Llena el siguiente formulario para conocer\nlos créditos que tenemos disponibles para ti.'
      )
    ).toBeTruthy();
  });
});
