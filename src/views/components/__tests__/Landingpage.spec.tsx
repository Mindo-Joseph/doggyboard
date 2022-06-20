/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import * as React from 'react';
import { getByAltText, render, RenderResult } from '@testing-library/react';
import Landingpage from '../Landingpage';

let documentBody: RenderResult;

/**
 * @jest-environment jsdom
 */
describe('<Landingpage/>', () => {
  beforeEach(() => {
    documentBody = render(<Landingpage />);
  }),
  it('should render description of the product', () => {
    expect(documentBody.getByText('Your dashboard for viewing various dog breeds')).toBeInTheDocument();
    expect(documentBody.getByText('Welcome to Dog Dashboard. Here we will be able to view various dog breeds')).toBeInTheDocument();
    getByAltText(documentBody.container, 'Dogs');
  });
});
