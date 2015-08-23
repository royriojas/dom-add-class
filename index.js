function getClassesNotInElement( el, cssClasses ) {
  var classes = el.className.split( /\s+/ ).reduce( function ( seq, current ) {
    seq[ current ] = true;
    return seq;
  }, { } );

  return cssClasses.filter( function ( klass ) {
    return !classes[ klass ];
  } );
}

module.exports = function () {
  var args = [ ].slice.call( arguments );
  var elements = args.shift();

  if ( !Array.isArray( elements ) ) {
    elements = [ elements ];
  }

  args = args.reduce( function ( seq, cName ) {
    if ( typeof cName !== 'string' ) {
      throw new Error( 'addClass expects a string' );
    }
    cName = cName.trim();
    if ( cName ) {
      seq = seq.concat( cName.split( /\s+/ ) );
    }
    return seq;
  }, [ ] );

  elements.forEach( function ( el ) {
    if ( el.classList ) {
      args.forEach( function ( cName ) {
        el.classList.add( cName );
      } );

    } else {
      args = getClassesNotInElement( el, args );
      if ( args.length > 0 ) {
        var className = args.join( ' ' );
        el.className += ' ' + className;
      }
    }
  } );
};
