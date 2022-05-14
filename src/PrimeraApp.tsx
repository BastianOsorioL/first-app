import PropTypes from 'prop-types';

export interface SaluteProps {
  saludo: string;
  subtitulo: string;
}

const PrimeraApp = (props: SaluteProps) => {
  return (
    <>
      <h1>{props.saludo}</h1>
      <p>{props.subtitulo}</p>
    </>
  );
};

// PrimeraApp.propTypes = {
//   saludo: PropTypes.string.isRequired,
// };

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo',
};

export default PrimeraApp;
