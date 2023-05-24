const BasicInfo = ({state, error, handleChange}) => {
    return(
        <div>
        <h3>Fields with * are required.</h3>
        <input type="text" placeholder="Title(*): (max: 100 letters)" name="title" value={state.title} onChange={handleChange} />
        {error.title && <p className={`errorMessage`}>{error.title}</p>}
        <input type="text" placeholder="Image: (Url)" name="image" value={state.image} onChange={handleChange} />
        {error.image && <p className={`errorMessage`}>{error.image}</p>}
        <input type="number" placeholder="Health Score: (min: 1 - max: 100) points" name="healthScore" value={state.healthScore} onChange={handleChange} />
        {error.healthScore && <p className={`errorMessage`}>{error.healthScore}</p>}
        <input type="number" placeholder="Time: (min: 1 - max: 100) minutes" name="time" value={state.time} onChange={handleChange} />
        {error.time && <p className={`errorMessage`}>{error.time}</p>}
        <textarea placeholder="Summary(*): (max: 100 letters)" name="summary" value={state.summary} onChange={handleChange} cols="30" rows="10"></textarea>
        {error.summary && <p className={`errorMessage`}>{error.summary}</p>}
      </div>
    );
};

export default BasicInfo;