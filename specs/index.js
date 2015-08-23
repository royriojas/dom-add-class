describe( 'dom-add-class', function () {
  var query = function ( selector, ctx ) {
    var arr = document.querySelectorAll( selector, ctx );
    return [ ].slice.call( arr );
  };

  var addClass = require( '../' );

  var dom = require( 'domquery' );

  beforeEach( function () {
    var tpl = require( './box.tpl' ).render();
    dom( tpl ).insert( '#fixtures' );
  } );

  it( 'should add a single class to several elements', function () {
    var eles = query( '.boxes .box' );
    addClass( eles, 'not-so-boxed' );

    eles.forEach( function ( ele ) {
      expect( !!ele.className.match( /not-so-boxed/ ) ).to.be.true;
    } );
  } );

  it( 'should add several classes to a single element', function () {
    var eles = query( '.boxes .box' );
    addClass( eles[ 0 ], 'not-so-boxed some-other-class' );

    //eles.forEach(function (ele) {
    expect( !!eles[ 0 ].className.match( /not-so-boxed/ ) ).to.be.true;
    expect( !!eles[ 0 ].className.match( /some-other-class/ ) ).to.be.true;
  //});
  } );

  it( 'should add several classes to several elements', function () {
    var eles = query( '.boxes .box' );
    addClass( eles, 'not-so-boxed some-other-class' );

    eles.forEach( function ( ele ) {
      expect( !!ele.className.match( /not-so-boxed/ ) ).to.be.true;
      expect( !!ele.className.match( /some-other-class/ ) ).to.be.true;
    } );
  } );

  it( 'should not duplicate the classes on the elements', function () {
    var ele = { className: 'box' };

    addClass( ele, 'box other-class' );
    addClass( ele, 'box other-class' );

    expect( ele.className ).to.equal( 'box other-class' );
  } );

  describe( 'when the passed class string contains several spaces', function () {
    it( 'should not fail adding the classes', function () {
      var eles = query( '.boxes .box' );
      addClass( eles, 'not-so-boxed   some-other-class' );

      eles.forEach( function ( ele ) {
        expect( !!ele.className.match( /not-so-boxed/ ) ).to.be.true;
        expect( !!ele.className.match( /some-other-class/ ) ).to.be.true;
        expect( ele.className ).to.equal( 'box not-so-boxed some-other-class' );
      } );
    } );
  } );

  describe( 'when the passed class is not a string or is empty', function () {
    it( 'should throw expected string error', function () {
      expect( function () {
        addClass( { }, null );
      } ).to.throw( 'addClass expects a string' );
    } );
    it( 'should do nothing if the string is empty', function () {
      var ele = query( '.boxes .box' )[ 0 ];
      addClass( ele, '' );
      expect( ele.className ).to.equal( 'box' );
    } );
  } );
} );
