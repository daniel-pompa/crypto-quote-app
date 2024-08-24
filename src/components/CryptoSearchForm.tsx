export const CryptoSearchForm = () => {
  return (
    <form className='form'>
      <div className='form-field'>
        <label htmlFor='currency'>Moneda</label>
        <select name='currency' id='currency'>
          <option value=''>Seleccione</option>
        </select>
      </div>

      <div className='form-field'>
        <label htmlFor='cryptocurrency'>Criptomoneda</label>
        <select name='cryptocurrency' id='cryptocurrency'>
          <option value=''>Seleccione</option>
        </select>
      </div>

      <input type='submit' value='Cotizar' />
    </form>
  );
};
