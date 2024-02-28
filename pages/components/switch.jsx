
const SwitchLanguage = ({setLanguage}) => {

    
  return (
    <div className="elemento-esquina">
      <label className="switch" onChange={()=>{
        setLanguage((e)=>!e)
      }}>
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default SwitchLanguage;
