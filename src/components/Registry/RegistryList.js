import React from 'react';
import RegistryCard from '../Registry/RegistryCard';
import { deleteRegistry } from '../../config/API-Calls';

const RegistryList = ({registries}, {getRegistries}) => {

  const removeRegistry = id => {
    deleteRegistry(id).then(res => {
      console.log(res.status)
      getRegistries()
    })
  }
  return (
    <div className="d-flex flex-wrap card-container">
      {
        registries
          .map(registry =>
            <RegistryCard
              key={registry.id}
              registry={registry}
              removeRegistry={removeRegistry}
            />
          )}
    </div>
  );
};

export default RegistryList;