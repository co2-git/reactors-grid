/* globals describe expect test */
import React from 'react';
import {mount} from 'enzyme';
import Base from '../../app/Base';
import jsdom from 'jsdom';

describe('Row / DOM', () => {
  test('it should return default {display: flex, flexDirection: row}', () => {
    jsdom.env(
      '<section></section>',
      [],
      (error) => {
        if (error) {
          throw error;
        }
        const view = mount(
          <Base reactorsPlatform="web" />
        );
        expect(view.props().style).toEqual({
          display: 'flex',
          flexDirection: 'row',
        });
      },
    );
  });
});
