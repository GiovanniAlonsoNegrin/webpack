import '../css/components.css';
// import webpackLogo from '../assets/img/webpack-logo.png';

export const greeting = ( name = 'no name' ) => {

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ name }`;

    document.body.append( h1 );

    //img
    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append(img);

}