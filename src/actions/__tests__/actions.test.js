import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe( 'saveComment', () => {
    it( 'has the correct type', () => {
        const action = saveComment(); // call action creator and save it

        expect( action.type ).toEqual( SAVE_COMMENT );
    });

    it( 'has the correct payload', () => {
        const action = saveComment( 'new comment' );

        expect( action.payload ).toEqual( 'new comment' );
    });
});