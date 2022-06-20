/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Heading from '../Heading';

let documentBody: RenderResult;

/**
 * @jest-environment jsdom
 */
describe('<Heading/>', () => {
  beforeEach(() => {
    documentBody = render(<Heading />);
  }),
  it('should render the heading', () => {
    expect(documentBody.getByText('Dog Dashboard')).toBeInTheDocument();
  });
});
