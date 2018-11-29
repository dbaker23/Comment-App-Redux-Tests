/* import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it( 'shows the comment box', () => {
    //create a div to render to in virtual space
    const div = document.createElement( 'div' );

    // render the component in an emulated browser
    ReactDOM.render( <App />, div );

    // expect( div.innerHTML ).toContain( 'Comment box' );
    expect( div ).toHaveAnInstanceOf( CommentBox );

    // cleanup after finishing
    ReactDOM.unmountComponentAtNode( div );
}); */

import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach( () => {
    wrapped = shallow( <App /> );
});

it( 'shows a comment box', () => {
    expect( wrapped.find( CommentBox ).length ).toEqual( 1 );
});

it( 'shows a comment list', () => {
    expect( wrapped.find( CommentList ).length ).toEqual( 1 );
});