import React from 'react';
import PropTypes from 'prop-types';
import TextField  from '@mui/material/TextField';

const Field=React.forwardRef(({InputP,style,label,placeholder,name,onKeyUp,value,type,color,onChange},ref)=>(
  <TextField
          required
          margin='normal'
          label={label}
          type={type}
          name={name}
          inputRef={ref}
          color={color}
          onKeyUp={onKeyUp}
          style={{style}}
          InputProps={InputP}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={value}
          />
))
export default Field

Field.propTypes={
  label:PropTypes.string,
  placeholder:PropTypes.string,
  name:PropTypes.string,
  onKeyUp:PropTypes.string,
  type:PropTypes.string,
  color:PropTypes.string
}