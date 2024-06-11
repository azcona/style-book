function deconstruct_values(value, type) {
  if (Array.isArray(value)) {
    const values = {};
    Object.entries(value).forEach(entry => {
      const [index, item] = entry;
      values[index] = deconstruct_values(item, index);
    })
    return values;
  } else {
    const values = {};
    Object.entries(value).forEach(entry => {
      const [mainKey, mainValue] = entry;
      values[mainKey] = {
        type: type + "-" + mainKey,
        value: mainValue
      }
    });
    return values;
  }
}

function remove_initial_numbers(value) {

  const regex = /^\d*/;
  const found = value.match(regex);
  if (!!found[0]) {
    return value.replace(found[0], '') + " " + found[0];
  } else {
    return value;
  }
}

function sanitize_names(obj) {
  Object.entries(obj).forEach(entry => {
    const [key, value] = entry;
    
    const sanitizedKey = remove_initial_numbers(key);
    if (key !== sanitizedKey) {
      console.log("Sanitized: ", key, " => ", sanitizedKey);
      obj[sanitizedKey] = value;
      delete obj[key];
    }
  });
  return obj;
}

function parse_figma_tokens(contents) {
  const parsed = JSON.parse(contents);
  const sanitized = sanitize_names(parsed);
  Object.entries(sanitized).forEach(entry => {
    const [mainKey, mainValue] = entry;
    if (mainValue.type === "typography" || mainValue.type === "boxShadow") {
      sanitized[mainKey] = deconstruct_values(mainValue.value, mainValue.type);
    }
    if (mainKey === "Underlined") {
      Object.keys(mainValue).forEach(function(key){
        const newKey = mainKey + "-" + key;
        if (mainValue[key].type === "typography") {
          sanitized[newKey] = deconstruct_values(mainValue[key].value, mainValue[key].type);
        }
      });
      delete sanitized[mainKey];
    }
    if(!mainValue.type){
      let removeKey=false;
      Object.keys(mainValue).forEach(function(key){
        if (typeof mainValue[key] === 'object' && mainValue[key] !== null) {
          // Check if the property value contains "value" and "type" properties
          if ('value' in mainValue[key] && 'type' in mainValue[key]) {
              // console.log(`${key} property value contains "value" and "type" properties.`);
              // Check if the value of the "value" property is a JSON object or a string
              if (typeof mainValue[key].value === 'object' && mainValue[key].value !== null) {
                  // console.log(`Value of ${mainKey + "<< childKey:"+key+">>"} is a JSON object.`);
                  const newKey = mainKey + "-" + key;
                  if (mainValue[key].type === "typography") {
                    sanitized[newKey] = deconstruct_values(mainValue[key].value, mainValue[key].type);
                    removeKey=true;
                  }
              } else if (typeof mainValue[key].value === 'string') {
              } else {
                  console.log(`Value of ${key} is of unexpected type.`);
              }
          }
      }
      });
      if(removeKey){
        delete sanitized[mainKey];
      }
    }
  });
  return sanitized;
}

module.exports = {parse_figma_tokens}
