import React from 'react';

export default function SystemRadio({ sys, switchSystem }) {

  const renderSystem = (sys) => {
    return (
      <div className="system-container">
        <label htmlFor="Metric" ><h4>Metric</h4></label>
        <input type="radio" name="system" defaultChecked={sys === 'Metric' ? true : false } onClick={() => switchSystem('Metric')} />
        <label htmlFor="Imperial" ><h4>Imperial </h4></label>
        <input type="radio" name="system" defaultChecked={sys === 'Imperial' ? true : false } onClick={() => switchSystem('Imperial')} />
      </div>
    )
  }
}